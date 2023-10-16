import { createSlice } from '@reduxjs/toolkit';
import { uid } from 'uid';
import { stream as initialState } from '@/store/initialState';
import { extractOptionSet } from '@/utils/formatting';
import { getQueryParam } from '@/utils';

const configSlice = createSlice({
  name: 'stream',
  initialState,
  reducers: {
    // for SENDING messages
    setUpstreamItem(state, { payload }) {
      const nextQueueItem = {
        term: getQueryParam(window.location.search, 'utm_chat'),
        user_id: localStorage.getItem('__cid'),
        role: 'user',
        message: payload,
      };
      state.upstreamQueue = nextQueueItem;
    },
    resetUpstreamItem(state) {
      state.upstreamQueue = initialState.upstreamQueue;
    },
    // for RECEIVING messages
    setDownstreamItem(state, { payload }) {
      const nextQueueItem = {
        term: getQueryParam(window.location.search, 'utm_chat'),
        user_id: localStorage.getItem('__cid'),
        role: 'assistant',
        message: payload,
      };

      state.downstreamQueue = nextQueueItem;
    },
    resetDownstreamItem(state) {
      state.downstreamQueue = initialState.downstreamQueue;
    },
    setDownstreamMessage(state, { payload }) {
      state.downstreamQueue = {
        ...state.downstreamQueue,
        message: state.downstreamQueue.message + payload.chunk,
      };
    },
    setHistory(state, { payload }) {
      const nextHistory = payload.map((item) => ({ ...item, id: uid(), role: item.role, ...extractOptionSet(item.content) }));
      state.history = nextHistory;
    },
    appendHistory(state, { payload }) {
      state.history.push({ id: uid(), ...extractOptionSet(payload.message), ...payload });
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
    }
  },
});

export const getCurrentPointer = (state) => state.stream.history[state.stream.history.length - 1].id;
export const getStream = state => state.stream;

export const { setUpstreamItem, setDownstreamItem, resetDownstreamItem, setDownstreamMessage, resetUpstreamItem, setHistory, resetHistory, appendHistory, setTextToParse, resetTextToParse, setIsLoading, resetIsLoading } = configSlice.actions;
export default configSlice.reducer;
