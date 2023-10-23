import { createSlice } from '@reduxjs/toolkit';
import { meta as initialState } from '@/store/initialState';

const configSlice = createSlice({
  name: 'meta',
  initialState,
  reducers: {
    setMeta(state, { payload }) {
      state.pd = payload.pd;
      state.cid = payload.cid;
      state.eid = payload.eid;
      state.systemType = payload.systemType;
      state.marketing = payload.marketing;
    },
    resetMeta(state) {
      state.pd = initialState.pd;
      state.cid = initialState.cid;
      state.eid = initialState.eid;
      state.systemType = initialState.systemType;
      state.marketing = initialState.marketing;
    },
  },
});

export const getMeta = state => state.meta;
export const { setMeta, resetMeta } = configSlice.actions;
export default configSlice.reducer;
