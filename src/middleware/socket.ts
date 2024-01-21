import { Middleware } from '@reduxjs/toolkit';
import { Socket, io } from 'socket.io-client';
import { config as socketConfig, Events } from '../config';
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
import { Definition, Roles, AllEvents } from '../config/enums';
import { AssistantHistoryData, StreamData, UserHistoryData, UserMessageContent, ClientMessage, AssistantMessageTypeUnion, TextMessage } from '../interfaces'

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
    if (data.role === Roles.user) {
      store.dispatch(setIsLoading());
    }

    if (socket && socket.connected && data.message.trim() !== '') {
      socket.volatile.emit(Events.chat, { time: new Date().getTime(), ...data }, withTimeout(dispatchRetry));
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
        Events.chat,
        {
          role: Roles.user,
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
      role: Roles.user,
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
    const lastMessage = chat.historyData[messageId].content.map(({ message }: { message: UserMessageContent }) => message).join('\n');

    if (lastMessage.trim() !== '') {
      handleMessageSending({
        role: Roles.user,
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

  // @ts-ignore;
  socket = io.connect(action.payload.chatUrl, { query: 'cid=' + meta.cid, ...socketConfig });

  socket.on(Events.connect, () => {
    const { meta } = store.getState();
    socket.sendBuffer = [];
    socket.emit(Events.chatHistory, { user_id: meta.cid, region: meta.region });
    store.dispatch(setConnected(true));
  });

  socket.on(Events.chatHistory, ({ history: servedHistory, errors, region }
    : { history: Array<UserHistoryData> | Array<AssistantHistoryData>, errors: string[], region: string }) => {
    store.dispatch(resetIsLoading());
    store.dispatch(setRegion(region));
    const { config, meta, chat } = store.getState();

    if (chat.error) return;

    if (errors.length) {
      store.dispatch(setError(errors[0]));
      return;
    }

    if (servedHistory.length) {
      store.dispatch(setExistingHistory(servedHistory));
      const last = [...servedHistory].pop();
      if (!last) return;
      store.dispatch(setResponseFormVisibility(last.content));
      store.dispatch(setIsEmailFormVisible(last.content.some(el => Definition.email in el && el.type === Definition.email)));
      store.dispatch(setIsPaymentButtonVisible(last.content.some(el => Definition.payment in el && el.type === Definition.payment)));
      return;
    }

    const initialMessageId = config.aiProfile.initialMessage[0].id
    const initialMessageData = { id: initialMessageId, role: Roles.assistant, content: config.aiProfile.initialMessage } as AssistantHistoryData
    store.dispatch(
      setExistingHistory([initialMessageData])
    );
    store.dispatch(setResponseFormVisibility(initialMessageData.content));

    handleMessageSending({
      role: Roles.assistant,
      term: getQueryParam(window.location.search, 'utm_chat') || '',
      user_id: meta.cid,
      message: JSON.stringify(config.aiProfile.initialMessage),
      messageId: initialMessageId,
      region: meta.region,
    });
  });

  socket.on(Events.streamStart, (data: StreamData) => {
    store.dispatch(setIsStreaming(true));
    store.dispatch(resetIsLoading());
    store.dispatch(resetOutgoing());
    store.dispatch(resetError());
    store.dispatch(fillAssistantHistoryData({ id: data.id, sequence: 1, content: { type: Definition.text, text: '', sequence: 1 } }));
  });

  socket.on(Events.streamData, (data: StreamData & { errors: Array<string> }) => {
    const assistantData = { id: data.id, sequence: data.sequence, content: { type: data.type, [data.type]: data[data.type], sequence: data.sequence } };

    if (data.type === Definition.email) store.dispatch(setIsEmailFormVisible(true));
    if (data.type === Definition.payment) store.dispatch(setIsPaymentButtonVisible(true));
    store.dispatch(fillAssistantHistoryData(assistantData));

    const { chat } = store.getState();
    store.dispatch(setResponseFormVisibility(chat.historyData[[...chat.historyIds].pop()].content));

    if ('errors' in data && data.errors.length && !chat.error) {
      store.dispatch(setError(data.errors[0]));
    }
  });

  socket.on(Events.streamEnd, (data: StreamData) => {
    const { chat } = store.getState();
    const queued = chat.queue.length && chat.queue[chat.queue.length - 1];

    if (queued) {
      store.dispatch(setQueuedId({ ...queued, id: data.id }));
      store.dispatch(removeFromQueue(queued));
    } else {
      store.dispatch(setLastQuestionId(data.id));
    }

    store.dispatch(setIsStreaming(false));
  });

  socket.on(Events.streamError, onError);
  socket.on(Events.error, onError);

  socket.on(Events.disconnect, () => {
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
