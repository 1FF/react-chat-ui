import { combineReducers, configureStore } from '@reduxjs/toolkit';
import metaReducer from '@/store/slices/meta';
import configReducer from '@/store/slices/config';
import chatReducer from '@/store/slices/chat';
import intentionsReducer from '@/store/slices/intentions';
import chatMiddleware from '@/middleware/socket';
import intentionsMiddleware from '@/middleware/intentions';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import disableReactDevTools from '@/utils/reactDevTools';

disableReactDevTools();

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
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }).concat(chatMiddleware, intentionsMiddleware),
});

export const persistor = persistStore(store);
