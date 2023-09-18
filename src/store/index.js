import { configureStore } from '@reduxjs/toolkit';
import metaReducer from '@/store/slices/meta';
import configReducer from '@/store/slices/config';

export const store = configureStore({
  reducer: {
    meta: metaReducer,
    config: configReducer,
  },
});

export default store;
