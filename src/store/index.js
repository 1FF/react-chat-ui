import { configureStore } from '@reduxjs/toolkit';
import metaReducer from '@/store/slices/meta';
import configReducer from '@/store/slices/config';
import streamReducer from '@/store/slices/stream';

export const store = configureStore({
  reducer: {
    meta: metaReducer,
    config: configReducer,
    stream: streamReducer,
  },
});

export default store;
