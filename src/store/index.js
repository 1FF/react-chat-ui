import { configureStore } from '@reduxjs/toolkit';
import metaReducer from '@/store/slices/meta';
import configReducer from '@/store/slices/config';
import streamReducer from '@/store/slices/stream';
import intentionsReducer from '@/store/slices/intentions';
import chatMiddleware from '@/middleware/socket';
import intentionsMiddleware from '@/middleware/intentions';
import analyticsReducer from '@/store/slices/analytics';

export const store = configureStore({
  reducer: {
    meta: metaReducer,
    config: configReducer,
    stream: streamReducer,
    intentions: intentionsReducer,
    analytics: analyticsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(chatMiddleware, intentionsMiddleware),
});

export default store;
