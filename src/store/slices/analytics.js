import { createSlice } from '@reduxjs/toolkit';
import { analytics as initialState } from '@/store/initialState';
import '@/plugins/socketio';

const analyticsSlice = createSlice({
  name: 'analytics',
  initialState,
  reducers: {
    setEvent(state, { payload }) {
      state.events[payload.event] = { executed: true };
    }
  },
});

export const getAnalytics = ({ analytics }) => analytics;

export const { setEvent
} = analyticsSlice.actions;
export default analyticsSlice.reducer;
