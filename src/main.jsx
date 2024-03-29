import './assets/css/index.css';

import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { AppBase } from './components/AppBase';
import { SCROLL_STOP_CLASS } from './config/env';
import { persistor, store } from './store';

export { intent } from './services/intentions';

let initiated = false;

export const ReactBotClient = (config) => {
  if (initiated) {
    return;
  }
  initiated = true;

  ReactDOM
    .createRoot(config.root)
    .render(
      <Provider store={ store }>
        <PersistGate persistor={ persistor }>
          <AppBase config={ config.initialConfig } />
        </PersistGate>
      </Provider>
    );

  document.body.classList.add(SCROLL_STOP_CLASS);
};

export default ReactBotClient;
