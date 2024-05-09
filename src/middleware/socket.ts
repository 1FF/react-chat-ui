import { Middleware } from '@reduxjs/toolkit';
import { io, Socket } from 'socket.io-client';
import { ServerData } from 'src/interfaces/store';

import { config as socketConfig, Events } from '../config';
import { Roles } from '../config/enums';
import { CHAT_FINISHED_TIMESTAMP, DEFAULT_CLOSE_HREF, SCROLL_STOP_CLASS, SUPPORT_PURPOSE } from '../config/env';
import {
  AssistantHistoryInitialMessage,
  AssistantRecord,
  ClientMessage,
  SocketHistoryRecord,
  UserMessageContent,
} from '../interfaces';
import {
  fillAssistantHistoryData,
  fillInitialMessage,
  getThreadId,
  initiateThread,
  resendMessage,
  resetError,
  resetHistory,
  resetIsLoading,
  resetOutgoing,
  setClosed,
  setConnected,
  setError,
  setIsLoading,
  setLastGroupPointer,
  setOutgoing,
  setTypingTimeoutExpired,
  showResendIcon,
  syncMessageStatus,
  updateHistoryByThread,
} from '../store/slices/chat';
import { setConfig } from '../store/slices/config';
import { setRegion } from '../store/slices/meta';
import { getQueryParam, uuidV4 } from '../utils';

let socket: Socket;

const chatMiddleware: Middleware = (store) => (next) => (action) => {
  const { meta, config } = store.getState();

  const onError = () => {
    store.dispatch(resetIsLoading());
    store.dispatch(setError(config.translations.error));
  };

  const dispatchRetry = () => {
    const threadId = getThreadId({ chat: store.getState().chat });
    if (!threadId) {
      return;
    }

    store.dispatch(showResendIcon({ itemId: [...store.getState().chat.record[threadId].historyIds].pop() }));
    onError();
  };

  const handleMessageSending = (data: ClientMessage): void => {
    if (action.$isSync) {
      return;
    }

    if (data.role === Roles.user) {
      store.dispatch(setIsLoading());
    }

    if (socket && socket.connected && data.message.trim() !== '') {
      socket.emit(
        Events.chat,
        {
          ...data,
          time: new Date().getTime(),
          threadId: getThreadId({ chat: store.getState().chat }),
          term: getQueryParam(),
          region: meta.region,
          userId: meta.cid,
        },
        withTimeout(dispatchRetry),
      );
      store.dispatch(resetError());
      return;
    }

    dispatchRetry();
  };

  const handleMessageResending = ({ itemId }: { itemId: string }) => {
    const threadId = getThreadId({ chat: store.getState().chat });
    store.dispatch(setIsLoading());

    const onResendError = () => {
      const { config } = store.getState();
      store.dispatch(showResendIcon({ itemId }));
      store.dispatch(resetIsLoading());
      store.dispatch(setError(config.translations.error));
    };

    const message = store
      .getState()
      .chat.record[threadId].historyData[itemId].content.map((item: { text: string }) => item.text)
      .join(['\n']);
    if (socket?.connected && message.trim() !== '') {
      socket.volatile.emit(
        Events.chat,
        {
          role: Roles.user,
          message,
          term: getQueryParam(),
          threadId,
          region: meta.region,
          messageId: itemId,
          userId: meta.cid,
        },
        withTimeout(onResendError),
      );
      store.dispatch(resetError());
    } else {
      onResendError();
    }
  };

  if (setOutgoing.match(action)) {
    const chat = store.getState().chat;
    handleMessageSending({
      role: Roles.user,
      message: action.payload,
      messageId: [...chat.record[getThreadId({ chat })].historyIds].pop(),
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
    const chat = store.getState().chat;
    const threadId = getThreadId({ chat });
    const messageId = [...chat.record[threadId].historyIds].pop();
    const currentMessage = chat.record[threadId].historyData[messageId];
    const lastMessage = chat.record[threadId].historyData[messageId].content
      .map(({ text }: { text: UserMessageContent }) => text)
      .join('\n');

    if (currentMessage.role === Roles.user && lastMessage.trim() !== '') {
      handleMessageSending({
        role: Roles.user,
        message: lastMessage,
        messageId: messageId,
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
    socket.emit(Events.chatHistory, { userId: meta.cid, region: meta.region, term: getQueryParam() });
    store.dispatch(setConnected(true));
    store.dispatch(setLastGroupPointer(uuidV4()));
  });

  socket.on(
    Events.chatHistory,
    ({ history: servedHistory, errors, region, term: servedTerm, threadId }: ServerData) => {
      store.dispatch(resetIsLoading());
      store.dispatch(setRegion(region));
      store.dispatch(initiateThread({ threadId, term: servedTerm }));

      const { config } = store.getState();

      if (errors.length) {
        store.dispatch(setError(errors[0]));
        return;
      }

      if (servedHistory.length) {
        store.dispatch(syncMessageStatus({ history: servedHistory, term: servedTerm }));
        store.dispatch(updateHistoryByThread({ history: servedHistory, threadId }));
        return;
      }

      store.dispatch(resetHistory({ term: getQueryParam(), thread: threadId }));
      store.dispatch(setIsLoading());
      let interval = 0;
      config.aiProfile.initialMessage.forEach(
        (element: AssistantHistoryInitialMessage, index: number, arr: Array<SocketHistoryRecord>) => {
          interval += 1000;

          setTimeout(() => {
            store.dispatch(fillInitialMessage({ message: element, threadId }));

            if (arr.length === index + 1) {
              config.aiProfile.initialMessage.forEach((message: SocketHistoryRecord) =>
                handleMessageSending({
                  role: Roles.assistant,
                  message: JSON.stringify(message.content),
                  messageId: message.id,
                }),
              );
              store.dispatch(resetIsLoading());
            }
          }, interval);
        },
      );
    },
  );

  socket.on(Events.streamStart, ({ id, term, threadId }: { id: string; term: string; threadId: string }) => {
    store.dispatch(resetIsLoading());
    store.dispatch(resetOutgoing());
    store.dispatch(resetError());
    store.dispatch(
      fillAssistantHistoryData({
        id,
        term,
        threadId,
        isStreaming: true,
      }),
    );
  });

  socket.on(
    Events.streamData,
    (
      data: AssistantRecord & {
        id: string;
        term: string;
        threadId: string;
        errors: Array<string>;
      },
    ) => {
      store.dispatch(
        fillAssistantHistoryData({
          id: data.id,
          sequence: data.sequence,
          term: data.term,
          threadId: data.threadId,
          isStreaming: true,
          content: {
            type: data.type,
            [data.type]: data[data.type],
            sequence: data.sequence,
          },
        }),
      );

      if (data.errors?.length && !store.getState().chat.error) {
        store.dispatch(setError(data.errors[0]));
      }
    },
  );

  socket.on(Events.streamEnd, ({ id, term, threadId }: { id: string; term: string; threadId: string }) => {
    store.dispatch(
      fillAssistantHistoryData({
        id,
        term,
        threadId,
        isStreaming: false,
      }),
    );
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
