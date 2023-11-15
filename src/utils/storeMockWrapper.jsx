import React from 'react';
import { render } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
// As a basic setup, import your same slice reducers
import metaReducer from '@/store/slices/meta';
import configReducer from '@/store/slices/config';
import chatReducer from '@/store/slices/chat';
import intentionsReducer from '@/store/slices/intentions';

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
      preloadedState }),
    ...renderOptions
  } = {}
) {
  // eslint-disable-next-line react/prop-types
  const Wrapper = ({ children }) => <Provider store={ store }>{ children }</Provider>;

  // Return an object with the store and all of RTL's query functions
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}

export default renderWithProviders;
