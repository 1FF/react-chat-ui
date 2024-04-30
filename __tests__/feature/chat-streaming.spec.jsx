/* eslint-disable no-undef */
/* eslint-env jest */
import { act } from 'react-dom/test-utils';

import { serverSocket } from '../../__mocks__/socket.io-client';
import AppBase from '../../src/components/AppBase';
import { chat as getInitialConfig, Events, initialMessage } from '../../src/config';
import { STORING_CHECKER_INTERVAL } from '../../src/config/env';
import { intent } from '../../src/main';
import initialState from '../../src/store/initialState';
import { uuidV4 } from '../../src/utils';
import renderWithProviders from '../../src/utils/storeMockWrapper';
import { dispatchStreaming, localTearDown } from '../helpers';

jest.useFakeTimers();

let root;
describe('AppBase, streaming events execute properly', () => {
  const term = 'default';
  const href = `https://example.com/?utm_chat=${term}}`;
  const search = `?utm_chat=${term}`;
  const threadId = uuidV4();

  beforeEach(async () => {
    const mockLocation = {
      href,
      search,
    };

    Object.defineProperty(window, 'location', {
      value: mockLocation,
      writable: true,
      enumerable: true,
    });
  });

  afterEach(localTearDown);

  test('message receival through streamStart streamData streamEnd work for streamed data without any special arguments', () => {
    let preHistoryRecievalRecords;

    // Arrange
    act(() => {
      root = renderWithProviders(
        <div id="chatbot-container">
          <AppBase config={getInitialConfig({ id: uuidV4(), purpose: '', close: { visible: true } })} />
        </div>,
      );
    });

    // Act
    act(() => {
      serverSocket.emit(Events.chatHistory, {
        region: faker.location.country(),
        history: [],
        errors: [],
        term: term,
        threadId: threadId,
      });
      jest.advanceTimersByTime(initialMessage.length * 1000 * initialMessage.length - 1);
      preHistoryRecievalRecords = root.store.getState().chat.record[threadId].historyIds;
    });

    act(() => {
      dispatchStreaming([
        {
          type: 'text',
          text: '',
          sequence: 1,
          id: '4216d0a8-2621-499c-8a65-70191e31ee5a',
          term,
          threadId: threadId,
        },
        {
          type: 'text',
          text: ' ticket',
          sequence: 1,
          id: '4216d0a8-2621-499c-8a65-70191e31ee5a',
          term,
          threadId: threadId,
        },
      ]);
    });

    const userFormElement = root.container.querySelector('[data-e2e="user-form"]');
    // Assert
    const { chat } = root.store.getState();
    expect(chat.isLoading).toBe(initialState.chat.isLoading);
    expect(chat.outgoing).toBe(initialState.chat.outgoing);
    expect(chat.incoming).toBe(initialState.chat.incoming);
    expect(chat.error).toBe(initialState.chat.error);
    expect(chat.record[threadId].historyIds.length > preHistoryRecievalRecords.length).toBeTruthy();
    expect(userFormElement).toBeInTheDocument();
  });

  test('message receival through streamStart streamData streamEnd work for message with buttons', () => {
    // Act
    act(() => {
      root = renderWithProviders(
        <div id="chatbot-container">
          <AppBase config={getInitialConfig({ id: uuidV4(), purpose: '', close: { visible: true } })} />
        </div>,
      );
    });

    act(() => {
      serverSocket.emit(Events.chatHistory, {
        region: faker.location.country(),
        history: [],
        errors: [],
        term: term,
        threadId: threadId,
      });
      jest.advanceTimersByTime(initialMessage.length * 1000 * initialMessage.length - 1);
    });

    act(() => {
      dispatchStreaming([
        {
          type: 'text',
          text: '',
          sequence: 1,
          id: '4216d0a8-2621-499c-8a65-70191e31ee5a',
          term,
          threadId: threadId,
        },
        {
          type: 'text',
          text: ' ticket',
          sequence: 1,
          id: '4216d0a8-2621-499c-8a65-70191e31ee5a',
          term,
          threadId: threadId,
        },
        {
          id: '4216d0a8-2621-499c-8a65-70191e31ee5a',
          type: 'buttons',
          sequence: 1,
          term,
          threadId: threadId,

          buttons: [
            { value: 'Yes', sequence: 1, text: 'Yes' },
            { value: 'No', sequence: 2, text: 'No' },
          ],
        },
      ]);
    });

    const userFormElement = root.container.querySelector('[data-e2e="user-form"]');
    const optionButtonElements = root.container.querySelectorAll('[data-e2e="option-button"]');

    // Assert
    const { chat } = root.store.getState();
    const buttonsMessageContent =
      chat.record[threadId].historyData[[...chat.record[threadId].historyIds].pop()].content;
    expect(buttonsMessageContent.length > 0).toBeTruthy();
    expect(optionButtonElements).toHaveLength(buttonsMessageContent.length);
    expect(userFormElement).toBeNull();
  });

  test(`message receival through streamStart streamData streamEnd work for message with [${intent.type.email}]`, () => {
    // Act
    act(() => {
      root = renderWithProviders(
        <div id="chatbot-container">
          <AppBase config={getInitialConfig({ id: uuidV4(), purpose: '', close: { visible: true } })} />
        </div>,
      );
    });

    act(() => {
      serverSocket.emit(Events.chatHistory, {
        region: faker.location.country(),
        history: [],
        errors: [],
        term: term,
        threadId: threadId,
      });
      jest.advanceTimersByTime(initialMessage.length * 1000 * initialMessage.length - 1);
    });

    act(() => {
      dispatchStreaming([
        {
          type: 'text',
          text: '',
          sequence: 1,
          id: '4216d0a8-2621-499c-8a65-70191e31ee5a',
          term,
          threadId: threadId,
        },
        {
          type: 'text',
          text: ' ticket',
          sequence: 1,
          id: '4216d0a8-2621-499c-8a65-70191e31ee5a',
          term,
          threadId: threadId,
        },
        {
          id: '4216d0a8-2621-499c-8a65-70191e31ee5a',
          type: 'email',
          sequence: 1,
          email: 'provide email',
          term,
          threadId: threadId,
        },
      ]);
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
      localStorage.setItem(
        '__pd',
        JSON.stringify({
          amount: '109.00',
          amountInUSD: 109,
          currency: 'USD',
          billingOptionType: 'one-time',
          provider: 'primer',
          planId: '22641f3b-1474-4c1b-9c90-288f3f572f00',
          displayPlanPrice: '$109',
        }),
      );
      root = renderWithProviders(
        <div id="chatbot-container">
          <AppBase config={getInitialConfig({ id: uuidV4(), purpose: '', close: { visible: true } })} />
        </div>,
      );

      jest.advanceTimersByTime(STORING_CHECKER_INTERVAL * 5);
    });

    act(() => {
      serverSocket.emit(Events.chatHistory, {
        region: faker.location.country(),
        history: [],
        errors: [],
        term: term,
        threadId: threadId,
      });
      jest.advanceTimersByTime(initialMessage.length * 1000 * initialMessage.length - 1);
    });

    act(() => {
      dispatchStreaming([
        {
          type: 'text',
          text: '',
          sequence: 1,
          id: '4216d0a8-2621-499c-8a65-70191e31ee5a',
          term,
          threadId: threadId,
        },
        {
          type: 'text',
          text: ' ticket',
          sequence: 1,
          id: '4216d0a8-2621-499c-8a65-70191e31ee5a',
          term,
          threadId: threadId,
        },
        {
          id: '4216d0a8-2621-499c-8a65-70191e31ee5a',
          type: 'payment',
          sequence: 1,
          payment: 'provide payment',
          term,
          threadId: threadId,
        },
      ]);
    });

    const paymentButtonElement = root.container.querySelector('[data-e2e="payment-form-trigger-btn"]');
    const lastAssistantMessageElement = [...root.container.querySelectorAll('[data-e2e="stream-assistant-msg"]')].pop();

    // Assert
    const emailFormElement = root.container.querySelector('[data-e2e="email-form"]');
    const userFormElement = root.container.querySelector('[data-e2e="user-form"]');

    expect(emailFormElement).not.toBeInTheDocument();
    expect(userFormElement).not.toBeInTheDocument();
    expect(paymentButtonElement).toBeInTheDocument();
    expect(lastAssistantMessageElement.innerHTML).toContain('provide payment $109');
  });
});
