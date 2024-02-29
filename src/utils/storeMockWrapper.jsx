import { render } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import metaReducer from '../store/slices/meta';
import configReducer from '../store/slices/config';
import chatReducer from '../store/slices/chat';
import intentionsReducer from '../store/slices/intentions';
import chatMiddleware from '../middleware/socket';
import intentionsMiddleware from '../middleware/intentions';

function renderWithProviders(
  ui,
  {
    preloadedState = {},
    // Automatically create a store instance if no store was passed in
    store = configureStore({
      reducer: {
        meta: metaReducer,
        intentions: intentionsReducer,
        chat: chatReducer,
        config: configReducer,
      },
      middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }).concat(chatMiddleware, intentionsMiddleware),
      preloadedState }),
    ...renderOptions
  } = {}
) {
  // eslint-disable-next-line react/prop-types
  const Wrapper = ({ children }) => <Provider store={ store }>{ children }</Provider>;

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}

export default renderWithProviders;
