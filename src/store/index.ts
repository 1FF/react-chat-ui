import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import {
  createStateSyncMiddleware,
  initMessageListener,
} from "redux-state-sync";
import { PERSIST, PURGE } from 'redux-persist/lib/constants';
import storage from 'redux-persist/lib/storage';

import intentionsMiddleware from '../middleware/intentions';
import chatMiddleware from '../middleware/socket';
import chatReducer from './slices/chat';
import configReducer from './slices/config';
import intentionsReducer from './slices/intentions';
import metaReducer from './slices/meta';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['chat', 'meta', 'config'],
};

export const store = configureStore({
  reducer: persistReducer(persistConfig, combineReducers({
    meta: metaReducer,
    config: configReducer,
    chat: chatReducer,
    intentions: intentionsReducer,
  })),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false })
    .concat(chatMiddleware, intentionsMiddleware, createStateSyncMiddleware({ blacklist: [PERSIST, PURGE], })),
});
initMessageListener(store);

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

export const persistor = persistStore(store);
