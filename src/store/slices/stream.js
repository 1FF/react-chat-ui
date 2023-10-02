import { createSlice } from '@reduxjs/toolkit';
import { uid } from 'uid';
import { stream as initialState } from '@/store/initialState';
import { extractOptionSet } from '@/utils/formatting';

const configSlice = createSlice({
  name: 'stream',
  initialState,
  reducers: {
    setStatus(state, { payload }) {
      console.log(payload);
      state.status = payload;
    },
    resetStatus(state) {
      state.status = initialState.status;
    },
    setPointer(state, { payload }) {
      state.streamPointer = payload;
    },
    resetPointer(state) {
      state.streamPointer = initialState.streamPointer;
    },
    setUpstreamItem(state, { payload }) {
      const url = window.location.search;
      const urlParams = new URLSearchParams(url);

      const nextQueueItem = {
        term: urlParams.get('utm_chat'),
        user_id: localStorage.getItem('__cid'),
        role: 'user',
        message: payload,
      };

      // Reset the stream pointer cause it's we have a new history item proposition
      configSlice.caseReducers.resetPointer(state);

      // Set the proposed upstream object
      state.upstreamQueue = nextQueueItem;
    },
    resetUpstreamItem(state) {
      state.upstreamQueue = initialState.upstreamQueue;
    },
    setHistory(state, { payload }) {
      const nextHistory = payload.map((item) => ({ id: uid(), role: item.role, ...extractOptionSet(item.content) }));
      const nextPointer = nextHistory.slice(-1).pop().id;
      console.log(payload);
      state.history = nextHistory;
      configSlice.caseReducers.setPointer(state, { payload: nextPointer });
    },
    updateHistory(state, { payload }) {
      configSlice.caseReducers.setPointer(state, { payload: payload.id });
    },
    resetHistory(state) {
      state.history = initialState.history;
    },
  },
});

export const getStreamPointer = ({ stream }) => stream.streamPointer;

export const { setUpstreamItem, resetUpstreamItem, setHistory, resetHistory } = configSlice.actions;
export default configSlice.reducer;
