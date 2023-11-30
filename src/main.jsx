import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import '@/assets/css/index.css';
import { AppBase } from '@/components/AppBase';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './store';

export { intent } from '@/services/intentions';

export const ReactBotClient = (config) => {
  ReactDOM
    .createRoot(config.root)
    .render(
      <Provider store={ store }>
        <PersistGate persistor={ persistor }>
          <AppBase config={ config.initialConfig } />
        </PersistGate>
      </Provider>
    );
};

export default ReactBotClient;
