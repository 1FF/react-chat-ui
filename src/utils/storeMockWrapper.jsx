import { configureStore } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';

import intentionsMiddleware from '../middleware/intentions';
import chatMiddleware from '../middleware/socket';
import initialState from '../store/initialState';
import chatReducer, { setConnected, setLastGroupPointer } from '../store/slices/chat';
import configReducer from '../store/slices/config';
import intentionsReducer from '../store/slices/intentions';
import metaReducer from '../store/slices/meta';
import { uuidV4 } from '.';

function renderWithProviders(ui, preloadedState = initialState) {
  const store = configureStore({
    reducer: {
      meta: metaReducer,
      intentions: intentionsReducer,
      chat: chatReducer,
      config: configReducer,
    },
    middleware:
      (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false })
        .concat(chatMiddleware, intentionsMiddleware),
    preloadedState
  });
  const Wrapper = ({ children }) => <Provider store={store}>{children}</Provider>;
  let root

  root = { store, ...render(ui, { wrapper: Wrapper }) }
  root.store.dispatch(setConnected(true));
  root.store.dispatch(setLastGroupPointer(uuidV4()));
  return root;
}

export default renderWithProviders;
