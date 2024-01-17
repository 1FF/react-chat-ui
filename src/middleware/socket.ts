import { Middleware } from '@reduxjs/toolkit';
import { Socket, io } from 'socket.io-client';
import { uid } from 'uid';
import { config as socketConfig, events, roles, streamMock, serverHistoryMock } from '../config';
import {
  setExistingHistory, setIsLoading,
  setTypingTimeoutExpired, setError,
  setOutgoing, setConnected,
  resetIsLoading, setClosed, resetError, resetOutgoing,
  updateResendStatus, resendMessage,
  setLastQuestionId, showResendStatus, pushQueue,
  removeFromQueue, setQueuedId,
  setIsStreaming, fillAssistantHistoryData,
} from '../store/slices/chat';
import { getQueryParam } from '../utils';
import { setIsEmailFormVisible, setIsPaymentButtonVisible, setResponseFormVisibility } from '../store/slices/intentions';
import { setConfig } from '../store/slices/config';
import { track } from '../services/tracking';
import { setRegion } from '../store/slices/meta';
import { CHAT_FINISHED_TIMESTAMP } from '../config/env';
import { AllEvents } from '../config/analytics';
import { AssistantHistoryData, BaseMessage, MessageType, UserHistoryData } from '../interfaces'

interface ClientMessage {
  role: roles.assistant | roles.user;
  term: string;
  user_id: string;
  message: string;
  messageId: string;
  region: string;
}


let socket: Socket;

const chatMiddleware: Middleware = store => next => action => {
  const { meta, chat, intentions } = store.getState();

  const onError = () => {
    const { config } = store.getState();
    store.dispatch(resetIsLoading());
    store.dispatch(setError(config.translations.error));
  };

  const dispatchRetry = () => {
    store.dispatch(showResendStatus());
    onError();
  };

  const handleMessageSending = (data: ClientMessage): void => {
    if (data.role === roles.user) {
      store.dispatch(setIsLoading());
    }

    if (socket && socket.connected && data.message.trim() !== '') {
      socket.volatile.emit(events.chat, { time: new Date().getTime(), ...data }, withTimeout(dispatchRetry));
      store.dispatch(resetError());
      return;
    }

    dispatchRetry();
  };

  const handleMessageResending = (data: { groupId: string, content: string }) => {
    store.dispatch(updateResendStatus({ groupId: data.groupId, content: data.content || '', resend: false, sent: true }));
    store.dispatch(setIsLoading());
    store.dispatch(pushQueue(data));

    const onResendError = () => {
      const { config } = store.getState();
      store.dispatch(removeFromQueue(data));
      store.dispatch(updateResendStatus({ groupId: data.groupId, content: data.content || '', resend: true, sent: false }));
      store.dispatch(resetIsLoading());
      store.dispatch(setError(config.translations.error));
    };
    // TODO define those types correctly
    const message = data.groupId ? chat.history.filter((item: { groupId: string }) => item.groupId === data.groupId).map((item: { content: string }) => item.content).join('\n') : data.content;

    if (socket && socket.connected && message.trim() !== '') {
      socket.volatile.emit(
        events.chat,
        {
          role: roles.user,
          message,
          term: getQueryParam(window.location.search, 'utm_chat'),
          user_id: meta.cid,
          region: meta.region,
        },
        withTimeout(onResendError)
      );
      store.dispatch(resetError());
    } else {
      onResendError();
    }
  };

  if (setOutgoing.match(action)) {
    handleMessageSending({
      role: roles.user,
      message: action.payload,
      term: getQueryParam(window.location.search, 'utm_chat') ?? '',
      user_id: meta.cid,
      region: meta.region,
      messageId: [...chat.historyIds].pop(),
    });
  }

  if (setClosed.match(action)) {
    const chatBotContainer = document.querySelector('#chatbot-container');
    if (document.body && chatBotContainer) {
      chatBotContainer.innerHTML = '';
      document.body.classList.remove('scroll-stop');
    }
    const currentLocation = new URL(window.location.href);
    currentLocation.search = '';
    localStorage.setItem(CHAT_FINISHED_TIMESTAMP, new Date().getTime().toString());
    window.location.href = currentLocation.toString();
    if (socket) socket.close();
  }

  if (setTypingTimeoutExpired.match(action) && action.payload) {
    const messageId = [...chat.historyIds].pop();
    const lastMessage = chat.historyData[messageId].map(({ content }: BaseMessage) => content).join('\n');

    if (lastMessage.trim() !== '') {
      handleMessageSending({
        role: roles.user,
        message: lastMessage,
        term: getQueryParam(window.location.search, 'utm_chat') || '',
        user_id: meta.cid,
        region: meta.region,
        messageId
      });
    }
  }

  if (setIsPaymentButtonVisible.match(action) && action.payload === true) {
    const data = {
      eventType: AllEvents.addToCart,
      systemType: meta.systemType,
      utmParams: meta.marketing.lastUtmParams,
      customerUuid: meta.cid,
      email: intentions.email.current
    };

    track(data);

    data.eventType = AllEvents.priceSeen;
    track(data);
  }

  if (setIsEmailFormVisible.match(action) && action.payload) {
    track({
      eventType: AllEvents.emailField,
      systemType: meta.systemType,
      utmParams: meta.marketing.lastUtmParams,
      customerUuid: meta.cid,
    });
  }

  if (resendMessage.match(action)) {
    handleMessageResending(action.payload);
  }

  if (!setConfig.match(action)) {
    return next(action);
  }

  store.dispatch(setIsLoading());

  //@ts-ignore
  socket = io.connect(action.payload.chatUrl, { query: 'cid=' + meta.cid, ...socketConfig });

  socket.on(events.connect, () => {
    const { meta } = store.getState();
    socket.sendBuffer = [];
    socket.emit(events.chatHistory, { user_id: meta.cid, region: meta.region });
    store.dispatch(setConnected(true));
  });

  socket.on(events.chatHistory, ({ history, errors, region }: { history: UserHistoryData[] | AssistantHistoryData[], errors: string[], region: string }) => {
    store.dispatch(resetIsLoading());
    store.dispatch(setRegion(region));
    const { config, meta, chat } = store.getState();

    if (chat.error) return;

    if (errors.length) {
      store.dispatch(setError(errors[0]));
      return;
    }

    if (history.length) {
      store.dispatch(setExistingHistory(history));
      const last = [...history].pop();
      if (!last) return;
      store.dispatch(setResponseFormVisibility(last.content));
      store.dispatch(setIsEmailFormVisible(last.content.some(el => el.type === 'email')));
      store.dispatch(setIsPaymentButtonVisible(last.content.some(el => el.type === 'payment')));
      return;
    }

    const id = uid();
    config.aiProfile.initialMessage
      .map((content: MessageType) =>
      // there may be an id prop either from the MessageType as a requirement or will be not required or should separate types for assistant or user types
      // comming from client of from server and vice/versa
        store.dispatch(fillAssistantHistoryData({ ...content, role: roles.assistant }))
      );
    store.dispatch(setResponseFormVisibility(config.aiProfile.initialMessage));
    handleMessageSending({
      role: roles.assistant,
      term: getQueryParam(window.location.search, 'utm_chat') || '',
      user_id: meta.cid,
      message: JSON.stringify(config.aiProfile.initialMessage),
      messageId: id,
      region: meta.region,
    });
  });

  // remove => meant to be for socket mock
  // let idx = 0;
  // let messageUuid = faker.string.uuid();

  // let mockedDataForEachStream = streamMock;

  // const resetUUID = () => {
  //   messageUuid = faker.string.uuid();
  //   mockedDataForEachStream = mockedDataForEachStream.map(i => ({ ...i, id: messageUuid }));
  // };

  socket.on(events.streamStart, (data: MessageType) => {
    // remove => meant to be for socket mock
    // resetUUID();
    // idx = 0;
    store.dispatch(setIsStreaming(true));
    store.dispatch(resetIsLoading());
    store.dispatch(resetOutgoing());
    store.dispatch(resetError());

    store.dispatch(fillAssistantHistoryData({ ...data, role: roles.assistant }));
    // store.dispatch(fillAssistantHistoryData(mockedDataForEachStream[idx]));
  });

  socket.on(events.streamData, (data: MessageType & { errors: string[] }) => {
    const { chat } = store.getState();

    if (data.type === 'email') store.dispatch(setIsEmailFormVisible(true));
    if (data.type === 'payment') store.dispatch(setIsPaymentButtonVisible(true));
    store.dispatch(fillAssistantHistoryData({ ...data, role: roles.assistant }));
    // store.dispatch(fillAssistantHistoryData(mockedDataForEachStream[idx]));
    store.dispatch(setResponseFormVisibility(chat.historyData[[...chat.historyIds].pop()]));

    if ('errors' in data && data.errors.length && !chat.error) {
      store.dispatch(setError(data.errors[0]));
    }

    // remove => meant to be for socket mock
    // if (mockedDataForEachStream[idx + 1]) {
    // idx += 1;
    // }
  });

  socket.on(events.streamEnd, (data: { question_id: string }) => {
    const { chat } = store.getState();
    const queued = chat.queue.length && chat.queue[chat.queue.length - 1];

    if (queued) {
      store.dispatch(setQueuedId({ ...queued, id: data.question_id }));
      store.dispatch(removeFromQueue(queued));
    } else {
      store.dispatch(setLastQuestionId(data.question_id));
    }

    store.dispatch(setIsStreaming(false));

    // remove => meant to be for socket mock
    // idx = 0;
    // resetUUID();
  });

  socket.on(events.streamError, onError);
  socket.on(events.error, onError);

  socket.on(events.disconnect, () => {
    store.dispatch(setConnected(false));
  });

  next(action);
};

const withTimeout = (onTimeout: () => void, timeout: number = 5000) => {
  let called = false;
  const timer = setTimeout(() => {
    if (called) return;
    called = true;
    onTimeout();
  }, timeout);

  // this part is executed by the server according to socket io docs
  return () => {
    if (called) return;
    called = true;
    clearTimeout(timer);
  };
};

export default chatMiddleware;
