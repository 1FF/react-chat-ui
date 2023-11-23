import { createSlice } from '@reduxjs/toolkit';
import { chat as initialState } from '@/store/initialState';
import { extractOptionSet } from '@/utils/formatting';
import { getQueryParam } from '@/utils';
import { roles } from '@/config';

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
      };
    },
    setHistory(state, { payload }) {
      state.history = payload.map((item) => ({ ...item, id: item.id, role: item.role, ...extractOptionSet(item.content) }));
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

      state.history.push({ id: payload.id, ...bubbleContent, role: payload.role });
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
    updateMessageStatus(state, { payload }) {
      //  payload =  {
      //   id, groupId, resend, sent;
      // }
      state.history = state.history.map(item => {
        if (payload.groupId === item.groupId) {
          item = { ...item, resend: payload.resend, sent: payload.sent };
        }
        if (item.id === payload.id) {
          item = { ...item, resend: payload.resend, sent: payload.sent };
        }
        return item;
      });
    },
    setLastGroupPointer(state, { payload }) {
      state.lastGroupId = payload;
    },
    resendMessage(state, { payload }) {
      console.log('resend DISPATCH');
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

export const getLastUserMessage = (state) => state.chat.history.findLast(item => item.role === roles.user);
export const getCurrentPointer = (state) => state.chat.incoming?.id || state.chat.history[state.chat.history.length - 1]?.id;
export const getChat = state => state.chat;

export const { setOutgoing, setIncoming,
  resetIncoming, addIncomingChunk,
  resetOutgoing, setHistory, resetHistory,
  appendHistory, setTextToParse, resetTextToParse,
  setIsLoading, resetIsLoading, setLastGroupPointer,
  setTypingTimeoutExpired, setError, resetError,
  setConnected, setClosed, updateMessageStatus,
  resendMessage
} = configSlice.actions;

export default configSlice.reducer;
