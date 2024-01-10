import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// @ts-ignore
import chatMiddleware from '../middleware/socket';
import chatReducer from './slices/chat';
import configReducer from './slices/config';
import disableReactDevTools from './../utils/reactDevTools';

// @ts-ignore
import intentionsMiddleware from '../middleware/intentions';
import intentionsReducer from './slices/intentions';
import metaReducer from './slices/meta';

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


export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

export const persistor = persistStore(store);
