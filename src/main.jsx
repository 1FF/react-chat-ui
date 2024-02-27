import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import './assets/css/index.css';
import { AppBase } from './components/AppBase';
import { persistor, store } from './store';
import { SCROLL_STOP_CLASS } from './config/env';

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
