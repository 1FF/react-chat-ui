import { Middleware } from '@reduxjs/toolkit';
import { Socket, io } from 'socket.io-client';
import { config as socketConfig, Events } from '../config';
import {
  setExistingHistory, setIsLoading,
  setTypingTimeoutExpired, setError,
  setOutgoing, setConnected,
  resetIsLoading, setClosed, resetError, resetOutgoing,
  hideResendIcon, resendMessage, showResendIcon,
  setIsStreaming, fillAssistantHistoryData, resetHistory, fillInitialMessage,
} from '../store/slices/chat';
import { getQueryParam } from '../utils';
import { setResponseFormVisibility } from '../store/slices/intentions';
import { setConfig } from '../store/slices/config';
import { setRegion } from '../store/slices/meta';
import { CHAT_FINISHED_TIMESTAMP } from '../config/env';
import { Roles } from '../config/enums';
import {
  AssistantRecord,
  UserMessageContent,
  ClientMessage,
  SocketHistoryRecord,
  AssistantHistoryInitialMessage
} from '../interfaces'

let socket: Socket;

const chatMiddleware: Middleware = store => next => action => {
  const { meta, chat } = store.getState();

  const onError = () => {
    const { config } = store.getState();
    store.dispatch(resetIsLoading());
    store.dispatch(setError(config.translations.error));
  };

  const dispatchRetry = () => {
    store.dispatch(showResendIcon({ itemId: chat.historyIds.pop() }));
    onError();
  };

  const handleMessageSending = (data: ClientMessage): void => {
    if (data.role === Roles.user) {
      store.dispatch(setIsLoading());
    }

    if (socket && socket.connected && data.message.trim() !== '') {
      socket.emit(Events.chat, { time: new Date().getTime(), ...data }, withTimeout(dispatchRetry));
      store.dispatch(resetError());
      return;
    }

    dispatchRetry();
  };

  const handleMessageResending = (data: { itemId: string, message: string }) => {
    store.dispatch(hideResendIcon(data));
    store.dispatch(setIsLoading());

    const onResendError = () => {
      const { config } = store.getState();
      store.dispatch(showResendIcon(data));
      store.dispatch(resetIsLoading());
      store.dispatch(setError(config.translations.error));
    };

    if (socket && socket.connected && data.message.trim() !== '') {
      socket.volatile.emit(
        Events.chat,
        {
          role: Roles.user,
          message: data.message,
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
    if (socket) {
      socket.close();
    }
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

  if (resendMessage.match(action)) {
    handleMessageResending(action.payload);
  }

  if (!setConfig.match(action)) {
    return next(action);
  }

  store.dispatch(setIsLoading());

  // @ts-expect-error this is working currently
  socket = io.connect(action.payload.chatUrl, { query: 'cid=' + meta.cid, ...socketConfig });

  socket.on(Events.connect, () => {
    const { meta } = store.getState();
    socket.sendBuffer = [];
    socket.emit(Events.chatHistory, { user_id: meta.cid, region: meta.region });
    store.dispatch(setConnected(true));
  });

  socket.on(Events.chatHistory, ({ history: servedHistory, errors, region }
    : { history: Array<SocketHistoryRecord>, errors: string[], region: string }) => {
    store.dispatch(resetIsLoading());
    store.dispatch(setIsStreaming(false));
    store.dispatch(setRegion(region));
    const { config, meta } = store.getState();

    if (errors.length) {
      store.dispatch(setError(errors[0]));
      return;
    }

    if (servedHistory.length) {
      store.dispatch(setExistingHistory(servedHistory));
      const last = [...servedHistory].pop();
      if (last && Array.isArray(last.content)) {
        store.dispatch(setResponseFormVisibility(last.content));
      }
      return
    }

    store.dispatch(resetHistory());
    store.dispatch(setIsLoading());
    let interval = 0;
    config.aiProfile.initialMessage
      .forEach((element: AssistantHistoryInitialMessage, index: number, arr: Array<SocketHistoryRecord>) => {
        interval += 1000;

        setTimeout(() => {
          store.dispatch(fillInitialMessage(element));

          if (arr.length === index + 1) {
            store.dispatch(setResponseFormVisibility([...config.aiProfile.initialMessage].pop().content));
            config.aiProfile.initialMessage.forEach((message: SocketHistoryRecord) =>
              handleMessageSending({
                role: Roles.assistant,
                term: getQueryParam(window.location.search, 'utm_chat') || '',
                user_id: meta.cid,
                message: JSON.stringify(message.content),
                messageId: message.id,
                region: meta.region,
              }));
            store.dispatch(resetIsLoading());
          }

        }, interval);

      });
  });

  socket.on(Events.streamStart, (data: AssistantRecord & { id: string }) => {
    store.dispatch(setIsStreaming(true));
    store.dispatch(resetIsLoading());
    store.dispatch(resetOutgoing());
    store.dispatch(resetError());
    store.dispatch(fillAssistantHistoryData({ id: data.id }));
  });

  socket.on(Events.streamData, (data: AssistantRecord
    & {
      id: string,
      errors: Array<string>
    }) => {
    const assistantData = {
      id: data.id,
      sequence: data.sequence,
      content: {
        type: data.type,
        [data.type]: data[data.type],
        sequence: data.sequence
      }
    };

    store.dispatch(fillAssistantHistoryData(assistantData));

    const { chat } = store.getState();
    store.dispatch(setResponseFormVisibility(chat.historyData[data.id].content));

    if (data.errors?.length && !chat.error) {
      store.dispatch(setError(data.errors[0]));
    }
  });

  socket.on(Events.streamEnd, () => {
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
    if (called) {
      return;
    }
    called = true;
    onTimeout();
  }, timeout);

  return () => {
    if (called) {
      return;
    }
    called = true;
    clearTimeout(timer);
  };
};

export default chatMiddleware;
