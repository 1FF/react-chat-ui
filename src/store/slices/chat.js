import { createSlice } from '@reduxjs/toolkit';
import { chat as initialState } from '@/store/initialState';
import { extractOptionSet } from '@/utils/formatting';
import { getQueryParam, hasExpired } from '@/utils';
import { roles } from '@/config';
import { CHAT_SEEN_KEY } from '@/config/env';

const configSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    setOutgoing(state, { payload }) {
      state.outgoing = {
        term: getQueryParam(window.location.search, 'utm_chat'),
        user_id: localStorage.getItem('__cid'),
        role: roles.user,
        message: payload,
      };
    },
    resetOutgoing(state) {
      state.outgoing = initialState.outgoing;
    },
    pushQueue(state, { payload }) {
      const notFound = !state.queue.find(it => it.groupId === payload.groupId || it.content === payload.content);
      if (notFound) state.queue.push(payload);
    },
    removeFromQueue(state, { payload }) {
      state.queue = state.queue.filter(it => it.groupId !== payload.groupId || it.content !== payload.content) || [];
    },
    setIncoming(state, { payload }) {
      state.incoming = {
        term: getQueryParam(window.location.search, 'utm_chat'),
        user_id: localStorage.getItem('__cid'),
        role: roles.assistant,
        content: payload || '',
      };
    },
    resetIncoming(state) {
      state.incoming = initialState.incoming;
    },
    addIncomingChunk(state, { payload }) {
      state.incoming = {
        ...state.incoming,
        content: state.incoming.content + payload.chunk,
        id: payload.id,
        question_id: payload.question_id,
      };
    },
    setHistory(state, { payload }) {
      state.history = payload.map((item) => ({ ...item, role: item.role, ...extractOptionSet(item.content) }));
    },
    appendHistory(state, { payload }) {
      let bubbleContent;

      if (payload.role === roles.assistant) {
        if (payload.options && payload.options.length > 0) {
          bubbleContent = { content: payload.content, options: payload.options, isSpecial: payload.isSpecial };
        } else {
          bubbleContent = { ...extractOptionSet(payload.content), isSpecial: payload.isSpecial };
        }
      }

      if (payload.role === roles.user) {
        bubbleContent = { content: payload.content, groupId: payload.groupId };
      }

      state.history.push({ ...bubbleContent, role: payload.role, id: payload.id, time: new Date().getTime() });
    },
    setLastQuestionId(state, { payload }) {
      state.history = state.history.map(item => {
        if (!item.id) {
          item.id = payload;
        }
        return item;
      });
    },
    setQueuedId(state, { payload }) {
      state.history = state.history.map(item => {
        if (!item.id && item.groupId === payload.groupId) {
          item.id = payload.id;
        }
        if (!item.id && item.content === payload.content) {
          item.id = payload.id;
        }
        return item;
      });
    },
    resetHistory(state) {
      state.history = initialState.history;
    },
    setTextToParse(state, { payload }) {
      state.textToParse += payload;
    },
    resetTextToParse(state) {
      state.textToParse = initialState.textToParse;
    },
    setIsLoading(state) {
      state.isLoading = true;
    },
    resetIsLoading(state) {
      state.isLoading = initialState.isLoading;
    },
    setTypingTimeoutExpired(state, { payload }) {
      state.typingTimeoutExpired = payload;
    },
    setConnected(state, { payload }) {
      state.connected = payload;
    },
    setClosed(state) {
      state.closed = true;
    },
    updateResendStatus(state, { payload }) {
      state.history = state.history.map(item => {
        if (!item.id && payload.groupId === item.groupId) {
          item = { ...item, resend: payload.resend, sent: payload.sent };
        }
        if (!item.id && payload.content === item.content) {
          item = { ...item, resend: payload.resend, sent: payload.sent };
        }
        return item;
      });
    },
    showResendStatus(state) {
      state.history = state.history.map((item, index, array) => {
        if (index === array.length - 1) {
          item = { ...item, resend: true, sent: false };
        }

        if (item.role === roles.user && !item.id) {
          item = { ...item, resend: true, sent: false };
        }

        return item;
      });
    },
    setLastGroupPointer(state, { payload }) {
      state.lastGroupId = payload;
    },
    resendMessage(state, { payload }) {
      state.history = state.history.map(item => item);
    },
    setError(state, { payload }) {
      state.error = payload;
    },
    resetError(state) {
      state.error = initialState.error;
    },
  },
});

export const getChat = state => state.chat;

export const mustHideChat = (state) => {
  const userMessages = state.chat.history.filter(it => it.role === roles.user);

  if (userMessages.length === 0) return false;

  const { time, role } = userMessages[userMessages.length - 1];
  let hasToStayOpen;

  if (role === roles.user && time) {
    hasToStayOpen = hasExpired(time);
  }

  if (hasToStayOpen) {
    localStorage.removeItem(CHAT_SEEN_KEY);
  }

  const chatSeen = localStorage.getItem(CHAT_SEEN_KEY);

  return chatSeen;
};

export const { setOutgoing, setIncoming,
  resetIncoming, addIncomingChunk,
  resetOutgoing, setHistory, resetHistory,
  appendHistory, setTextToParse, resetTextToParse,
  setIsLoading, resetIsLoading, setLastGroupPointer,
  setTypingTimeoutExpired, setError, resetError,
  setConnected, setClosed, updateResendStatus,
  resendMessage, setLastQuestionId, showResendStatus,
  pushQueue, removeFromQueue, setQueuedId
} = configSlice.actions;

export default configSlice.reducer;
