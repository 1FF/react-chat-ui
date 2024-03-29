import { Middleware } from '@reduxjs/toolkit';
import { io, Socket } from 'socket.io-client';

import { config as socketConfig, Events } from '../config';
import { QueryParams, Roles } from '../config/enums';
import { CHAT_FINISHED_TIMESTAMP, DEFAULT_CLOSE_HREF, SCROLL_STOP_CLASS, SUPPORT_PURPOSE } from '../config/env';
import {
  AssistantHistoryInitialMessage,
  AssistantRecord,
  ClientMessage,
  SocketHistoryRecord,
  UserMessageContent
} from '../interfaces'
import {
  fillAssistantHistoryData,
  fillInitialMessage,
  hideResendIcon,
  resendMessage,
  resetError,
  resetHistory,
  resetIsLoading,
  resetOutgoing,
  setClosed,
  setConnected,
  setError,
  setExistingHistory,
  setIsLoading,
  setIsStreaming,
  setOutgoing,
  setTypingTimeoutExpired,
  showResendIcon,
} from '../store/slices/chat';
import { setConfig } from '../store/slices/config';
import { setRegion } from '../store/slices/meta';
import { getQueryParam } from '../utils';

let socket: Socket;

const chatMiddleware: Middleware = (store) => (next) => (action) => {
  const { meta, chat, config } = store.getState();

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

    if (socket?.connected && data.message.trim() !== '') {
      socket.volatile.emit(
        Events.chat,
        {
          role: Roles.user,
          message: data.message,
          term: getQueryParam(QueryParams.chat),
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
      term: getQueryParam(QueryParams.chat),
      user_id: meta.cid,
      region: meta.region,
      messageId: [...chat.historyIds].pop(),
    });
  }

  if (setClosed.match(action)) {
    const chatBotContainer = document.querySelector('#chatbot-container');

    if (document.body && chatBotContainer && config.purpose !== SUPPORT_PURPOSE) {
      chatBotContainer.innerHTML = '';
      document.body.classList.remove(SCROLL_STOP_CLASS);
    }

    localStorage.setItem(CHAT_FINISHED_TIMESTAMP, new Date().getTime().toString());

    if (socket) {
      socket.close();
    }

    window.location.href = config.close.href || DEFAULT_CLOSE_HREF;
  }

  if (setTypingTimeoutExpired.match(action) && action.payload) {
    const messageId = [...chat.historyIds].pop();
    const lastMessage = chat.historyData[messageId].content.map(({ message }: { message: UserMessageContent }) => message).join('\n');

    if (lastMessage.trim() !== '') {
      handleMessageSending({
        role: Roles.user,
        message: lastMessage,
        term: getQueryParam(QueryParams.chat),
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
  socket = io.connect(action.payload.chatUrl, { query: `cid=${meta.cid}`, ...socketConfig });

  socket.on(Events.connect, () => {
    const { meta } = store.getState();
    socket.sendBuffer = [];
    socket.emit(Events.chatHistory, { user_id: meta.cid, region: meta.region, term: getQueryParam(QueryParams.chat) });
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
            config.aiProfile.initialMessage.forEach((message: SocketHistoryRecord) =>
              handleMessageSending({
                role: Roles.assistant,
                term: getQueryParam(QueryParams.chat),
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

  socket.on(Events.streamStart, ({ id }: { id: string }) => {
    store.dispatch(setIsStreaming(true));
    store.dispatch(resetIsLoading());
    store.dispatch(resetOutgoing());
    store.dispatch(resetError());
    store.dispatch(fillAssistantHistoryData({ id }));
  });

  socket.on(Events.streamData, (data: AssistantRecord
    & {
      id: string,
      errors: Array<string>
    }) => {

    store.dispatch(fillAssistantHistoryData({
      id: data.id,
      sequence: data.sequence,
      content: {
        type: data.type,
        [data.type]: data[data.type],
        sequence: data.sequence
      }
    }));

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
