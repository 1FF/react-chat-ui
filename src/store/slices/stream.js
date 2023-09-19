import { createSlice } from '@reduxjs/toolkit';
import { uid } from 'uid';
import { stream as initialState } from '@/store/initialState';
import { extractOptionSet } from '@/utils/formatting';

const configSlice = createSlice({
  name: 'stream',
  initialState,
  reducers: {
    setHistory(state, { payload }) {
      const nextHistory = payload.map((item) => ({ id: uid(), ...item, ...extractOptionSet(item.content) }));

      state.history = nextHistory;
    },
    resetHistory(state) {
      state.history = initialState.history;
    },
  },
});

export const { setHistory, resetHistory } = configSlice.actions;
export default configSlice.reducer;
