import { createSlice } from '@reduxjs/toolkit';
import { meta as initialState } from '../initialState';
import { MetaState } from '../../interfaces/index';

const configSlice = createSlice({
  name: 'meta',
  initialState,
  reducers: {
    setMeta(state, { payload }) {
      state.cid = payload.cid;
      state.eid = payload.eid;
      state.systemType = payload.systemType;
      state.pd = { ...payload.pd, ...state.pd };
      state.marketing = { ...payload.marketing, ...state.marketing };
    },
    resetMeta(state) {
      state.pd = initialState.pd;
      state.cid = initialState.cid;
      state.eid = initialState.eid;
      state.systemType = initialState.systemType;
      state.marketing = initialState.marketing;
    },
    setMarketing(state, { payload }) {
      state.marketing = { ...state.marketing, ...payload };
    },
    setPd(state, { payload }) {
      state.pd = { ...state.pd, ...payload };
    },
    setRegion(state, { payload }) {
      state.region = payload;
    }
  }
});

export const getMeta = (state: { meta: MetaState }) => state.meta;
export const { setMeta, resetMeta, setMarketing, setPd, setRegion } = configSlice.actions;
export default configSlice.reducer;
