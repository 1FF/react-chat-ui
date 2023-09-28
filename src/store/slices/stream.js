import { createSlice } from '@reduxjs/toolkit';
import { uid } from 'uid';
import { stream as initialState } from '@/store/initialState';
import { extractOptionSet } from '@/utils/formatting';

const configSlice = createSlice({
  name: 'stream',
  initialState,
  reducers: {
    setPointer(state, { payload }) {
      state.streamPointer = payload;
    },
    resetPointer(state) {
      state.streamPointer = initialState.streamPointer;
    },
    setQueueItem(state, { payload }) {
      const url = window.location.search;
      const urlParams = new URLSearchParams(url);

      const nextQueueItem = {
        term: urlParams.get('utm_chat'),
        user_id: localStorage.getItem('__cid'),
        role: 'user',
        message: payload,
      };

      state.queue.push(nextQueueItem);
    },
    resetQueue(state) {
      state.queue = initialState.queue;
    },
    setHistory(state, { payload }) {
      const nextHistory = payload.map((item) => ({ id: uid(), ...item, ...extractOptionSet(item.content) }));

      state.history = nextHistory;
    },
    resetHistory(state) {
      state.history = initialState.history;
    },
  },
});

export const { setQueueItem, resetQueue, setHistory, resetHistory } = configSlice.actions;
export default configSlice.reducer;
