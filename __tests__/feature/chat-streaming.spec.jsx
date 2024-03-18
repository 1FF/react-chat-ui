/* eslint-env jest */
import { act } from 'react-dom/test-utils';

import { intent } from '../../src/main';
import initialState from '../../src/store/initialState';
import { dispatchStreaming, localTearDown } from '../helpers';
import renderWithProviders from '../../src/utils/storeMockWrapper';
import { setConnected } from '../../src/store/slices/chat';
import AppBase from '../../src/components/AppBase';
import { serverSocket } from '../../__mocks__/socket.io-client';
import { Events, chat as getInitialConfig, initialMessage } from '../../src/config';
import { STORING_CHECKER_INTERVAL } from '../../src/config/env';
import { uuidV4 } from '../../src/utils';

jest.useFakeTimers();

let root;
describe('AppBase, streaming events execute properly', () => {
  afterEach(localTearDown);

  test('message receival through streamStart streamData streamEnd work for streamed data without any special arguments', () => {
    // Arrange
    act(() => {
      root = renderWithProviders(<div id="chatbot-container"><AppBase config={getInitialConfig({ id: uuidV4(), purpose: '', close: { visible: true } })} /></div>);
      root.store.dispatch(setConnected(true));
    });

    const initialHistory = root.store.getState().chat.historyIds;

    // Act
    act(() => {
      serverSocket.emit(Events.chatHistory, {
        "region": faker.location.country(),
        "history": [],
        "errors": []
      })
      jest.advanceTimersByTime((initialMessage.length * 1000) * initialMessage.length - 1);
    });

    act(() => {
      dispatchStreaming([{
        "type": "text",
        "text": "",
        "sequence": 1,
        "id": "4216d0a8-2621-499c-8a65-70191e31ee5a"
      }, {
        "type": "text",
        "text": " ticket",
        "sequence": 1,
        "id": "4216d0a8-2621-499c-8a65-70191e31ee5a"
      }]);
    });

    const userFormElement = root.container.querySelector('[data-e2e="user-form"]');

    // Assert
    const { chat } = root.store.getState();
    expect(chat.isLoading).toBe(initialState.chat.isLoading);
    expect(chat.outgoing).toBe(initialState.chat.outgoing);
    expect(chat.incoming).toBe(initialState.chat.incoming);
    expect(chat.error).toBe(initialState.chat.error);
    expect(chat.textToParse).toBe(initialState.chat.textToParse);
    expect(chat.historyIds.length > initialHistory.length).toBeTruthy();
    expect(userFormElement).toBeInTheDocument();
  });

  test('message receival through streamStart streamData streamEnd work for message with buttons', () => {
    // Act
    act(() => {
      root = renderWithProviders(<div id="chatbot-container"><AppBase config={getInitialConfig({ id: uuidV4(), purpose: '', close: { visible: true } })} /></div>);
      root.store.dispatch(setConnected(true));
    });

    act(() => {
      serverSocket.emit(Events.chatHistory, {
        "region": faker.location.country(),
        "history": [],
        "errors": []
      })
      jest.advanceTimersByTime((initialMessage.length * 1000) * initialMessage.length - 1);
    });

    act(() => {
      dispatchStreaming([{
        "type": "text",
        "text": "",
        "sequence": 1,
        "id": "4216d0a8-2621-499c-8a65-70191e31ee5a"
      }, {
        "type": "text",
        "text": " ticket",
        "sequence": 1,
        "id": "4216d0a8-2621-499c-8a65-70191e31ee5a"
      },
      { "id": "4216d0a8-2621-499c-8a65-70191e31ee5a", 'type': 'buttons', 'sequence': 1, 'buttons': [{ 'value': 'Yes', 'sequence': 1, 'text': 'Yes' }, { 'value': 'No', 'sequence': 2, 'text': 'No' }] }]);
    });

    const userFormElement = root.container.querySelector('[data-e2e="user-form"]');
    const optionButtonElements = root.container.querySelectorAll('[data-e2e="option-button"]');

    // Assert
    const { chat } = root.store.getState();
    const buttonsMessageContent = chat.historyData[[...chat.historyIds].pop()].content;
    expect(buttonsMessageContent.length > 0).toBeTruthy();
    expect(optionButtonElements).toHaveLength(buttonsMessageContent.length);
    expect(userFormElement).toBeNull();
  });

  test(`message receival through streamStart streamData streamEnd work for message with [${intent.type.email}]`, () => {
    // Act
    act(() => {
      root = renderWithProviders(<div id="chatbot-container"><AppBase config={getInitialConfig({ id: uuidV4(), purpose: '', close: { visible: true } })} /></div>);
      root.store.dispatch(setConnected(true));
    });

    act(() => {
      serverSocket.emit(Events.chatHistory, {
        "region": faker.location.country(),
        "history": [],
        "errors": []
      })
      jest.advanceTimersByTime((initialMessage.length * 1000) * initialMessage.length - 1);
    });

    act(() => {
      dispatchStreaming([{
        "type": "text",
        "text": "",
        "sequence": 1,
        "id": "4216d0a8-2621-499c-8a65-70191e31ee5a"
      }, {
        "type": "text",
        "text": " ticket",
        "sequence": 1,
        "id": "4216d0a8-2621-499c-8a65-70191e31ee5a"
      },
      { "id": "4216d0a8-2621-499c-8a65-70191e31ee5a", 'type': 'email', 'sequence': 1, 'email': 'provide email' }]);
    });

    const emailFormElement = root.container.querySelector('[data-e2e="email-form"]');
    const userFormElement = root.container.querySelector('[data-e2e="user-form"]');

    // Assert
    expect(emailFormElement).toBeInTheDocument();
    expect(userFormElement).not.toBeInTheDocument();
  });

  test(`message receival through streamStart streamData streamEnd work for message with [${intent.type.payment}]`, () => {
    // Act
    act(() => {
      localStorage.setItem("__pd", JSON.stringify({
        "amount": "109.00",
        "amountInUSD": 109,
        "currency": "USD",
        "billingOptionType": "one-time",
        "provider": "primer",
        "planId": "22641f3b-1474-4c1b-9c90-288f3f572f00",
        "displayPlanPrice": "$109"
      }))
      root = renderWithProviders(<div id="chatbot-container"><AppBase config={getInitialConfig({ id: uuidV4(), purpose: '', close: { visible: true } })} /></div>);
      root.store.dispatch(setConnected(true));
      jest.advanceTimersByTime(STORING_CHECKER_INTERVAL * 5)
    });

    act(() => {
      serverSocket.emit(Events.chatHistory, {
        "region": faker.location.country(),
        "history": [],
        "errors": []
      })
      jest.advanceTimersByTime(((initialMessage.length * 1000) * initialMessage.length - 1));
    });

    act(() => {
      dispatchStreaming([{
        "type": "text",
        "text": "",
        "sequence": 1,
        "id": "4216d0a8-2621-499c-8a65-70191e31ee5a"
      }, {
        "type": "text",
        "text": " ticket",
        "sequence": 1,
        "id": "4216d0a8-2621-499c-8a65-70191e31ee5a"
      },
        { "id": "4216d0a8-2621-499c-8a65-70191e31ee5a", 'type': 'payment', 'sequence': 1, 'payment': 'provide payment' }]);
    });

    const paymentButtonElement = root.container.querySelector('[data-e2e="payment-form-trigger-btn"]');
    const lastAssistantMessageElement = [...root.container.querySelectorAll('[data-e2e="stream-assistant-msg"]')].pop();

    // Assert
    const emailFormElement = root.container.querySelector('[data-e2e="email-form"]');
    const userFormElement = root.container.querySelector('[data-e2e="user-form"]');

    expect(emailFormElement).not.toBeInTheDocument();
    expect(userFormElement).not.toBeInTheDocument();
    expect(paymentButtonElement).toBeInTheDocument();
    expect(lastAssistantMessageElement.innerHTML).toContain('provide payment $109')
  });
});
