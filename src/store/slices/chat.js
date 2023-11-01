import { createSlice } from '@reduxjs/toolkit';
import { uid } from 'uid';
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
        content: payload,
      };
    },
    setError(state, { payload }) {
      state.error = payload;
    },
    resetError(state) {
      state.error = initialState.error;
    },
    resetIncoming(state) {
      state.incoming = initialState.incoming;
    },
    addIncomingChunk(state, { payload }) {
      state.incoming = {
        ...state.incoming,
        content: state.incoming.content + payload.chunk,
      };
    },
    setHistory(state, { payload }) {
      state.history = payload.map((item) => ({ ...item, id: uid(), role: item.role, ...extractOptionSet(item.content) }));
    },
    appendHistory(state, { payload }) {
      if (payload.options && payload.options.length > 0) {
        state.history.push({ id: uid(), content: payload.content, options: payload.options, role: payload.role });
      } else {
        state.history.push({ id: uid(), ...extractOptionSet(payload.content), role: payload.role });
      }
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
    appendUnsent(state, { payload }) {
      state.unsent = [...state.unsent, payload];
    },
    resetUnsent(state) {
      state.unsent = initialState.unsent;
    },
    setShouldSendUnsent(state, { payload }) {
      state.shouldSendUnsent = payload;
    },
    setConnected(state, { payload }) {
      state.connected = payload;
    },
    setClosed(state) {
      state.closed = true;
    },
  },
});

export const getCurrentPointer = (state) => state.chat.history[state.chat.history.length - 1].id;
export const getStream = state => state.chat;

export const { setOutgoing, setIncoming,
  resetIncoming, addIncomingChunk,
  resetOutgoing, setHistory, resetHistory,
  appendHistory, setTextToParse, resetTextToParse,
  setIsLoading, resetIsLoading, appendUnsent, resetUnsent,
  setShouldSendUnsent, setError, resetError,
  setConnected, setClosed
} = configSlice.actions;

export default configSlice.reducer;
