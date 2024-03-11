/* eslint-env jest */
import { fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

import { uuidV4 } from '../../src/utils';
import { intent } from '../../src/main';
import { localTearDown } from '../helpers';
import AppBase from '../../src/components/AppBase';
import renderWithProviders from '../../src/utils/storeMockWrapper';
import { setConnected } from '../../src/store/slices/chat';
import { serverSocket } from '../../__mocks__/socket.io-client';
import { Events, Roles, chat as getInitialConfig, initialMessage } from '../../src/config';

jest.useFakeTimers();

let root;
const chatConfig = getInitialConfig({ id: uuidV4(), purpose: '', close: { visible: true } });
describe('Chat-history event works and visualizes items accordingly', () => {
  afterEach(localTearDown);

  test('on chat-history event state is shown and saved properly', async () => {
    jest.spyOn(intent.core, 'emit');
    act(() => {
      root = renderWithProviders(
        <div id="chatbot-container">
          <AppBase config={getInitialConfig({ id: uuidV4(), purpose: '', close: { visible: true } })} />
        </div>
      );
      root.store.dispatch(setConnected(true));
    });

    // Act
    const serverData = {
      "region": faker.location.country(),
      "history": [
        {
          id: uuidV4(),
          role: Roles.assistant,
          time: new Date().getTime(),
          content: [
            {
              'type': 'text',
              'text': 'Do you want to lose weight?', 'sequence': 2
            },
          ]
        },
      ],
      "errors": []
    }
    act(() => {
      serverSocket.emit(Events.chatHistory, serverData);
      jest.advanceTimersByTime((initialMessage.length * 1000) * initialMessage.length - 1);
    });

    const dateElement = root.container.querySelector('[data-e2e="stream-assistant-msg-date"]');
    const historyElements = root.container.querySelectorAll('[data-e2e="history-item"]');
    const userFormElement = root.container.querySelector('[data-e2e="user-form"]');
    const emailFormElement = root.container.querySelector('[data-e2e="email-form"]');

    // Assert
    expect(dateElement).not.toBeNull();
    expect(userFormElement).not.toBeNull();
    expect(emailFormElement).toBeNull();

    const { meta, config, chat } = root.store.getState();
    expect(meta.region).toStrictEqual(serverData.region);
    expect(historyElements.length).toEqual(chat.historyIds.length);
    expect(config.aiProfile).toStrictEqual(chatConfig.app.aiProfile);
    expect(config.translations).toStrictEqual(chatConfig.app.translations);
  });

  test('on click payment button intent is being emitted and button is disabled', async () => {
    jest.spyOn(intent.core, 'emit');
    act(() => {
      root = renderWithProviders(<div id="chatbot-container"><AppBase config={getInitialConfig({ id: uuidV4(), purpose: '', close: { visible: true } })} /></div>);
      root.store.dispatch(setConnected(true));
    });

    // Act
    const serverData = {
      "region": faker.location.country(),
      "history": [
        {
          id: uuidV4(),
          role: Roles.assistant,
          time: new Date().getTime(),
          content: [
            { 'type': 'text', 'text': 'Do you want to lose weight?', 'sequence': 2 },
            { 'type': 'payment', 'payment': 'Do you want to lose weight?', 'sequence': 2 },
          ]
        },
      ],
      "errors": []
    }
    act(() => {
      serverSocket.emit(Events.chatHistory, serverData);
      jest.advanceTimersByTime((initialMessage.length * 1000) * initialMessage.length - 1);
    });

    const paymentButtonElement = root.container.querySelector('[data-e2e="payment-form-trigger-btn"]');
    fireEvent.click(paymentButtonElement);

    // Assert
    expect(intent.core.emit).toHaveBeenCalledTimes(1);
    expect(paymentButtonElement).toBeDisabled();
  });
});
