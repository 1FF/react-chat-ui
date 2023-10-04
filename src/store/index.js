import { configureStore } from '@reduxjs/toolkit';
import metaReducer from '@/store/slices/meta';
import configReducer from '@/store/slices/config';
import streamReducer from '@/store/slices/stream';
import chatMiddleware from '@/middleware/socket';

export const store = configureStore({
  reducer: {
    meta: metaReducer,
    config: configReducer,
    stream: streamReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(chatMiddleware),
});

export default store;
