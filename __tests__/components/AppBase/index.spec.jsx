/* eslint-env jest */
import { act } from 'react-dom/test-utils';
import { serverSocket, cleanup, io } from 'socket.io-client';
import { fireEvent, screen, waitFor } from '@testing-library/react';
import { faker } from '@faker-js/faker';

import AppBase from '../../../src/components/AppBase/index';
import { Events } from '../../../src/config';
import { formatDateByLocale } from '../../../src/utils';
import renderWithProviders from '../../../src/utils/storeMockWrapper';
import { LINK_CLICKED_KEY, STORING_CHECKER_INTERVAL } from '../../../src/config/env';
import { intent } from '../../../src/main';
import initialState from '../../../src/store/initialState';
import { initialConfig, serverHistoryMock, serverHistoryMockWithEmailIntent, serverHistoryMockWithLink, serverHistoryMockWithPaymentIntent, streamMocks} from '../../../src/chatMocks';

const actualWindow = window.location;

let root;
const spies = [];
const region = faker.location.country();

describe('AppBase, chat-history event and execute properly', () => {
  beforeEach(async () => { await localSetup(); });
  afterEach(localTearDown);

  test('on chat-history event state is shown and saved properly', async () => {
    const items = await screen.findAllByText(initialConfig.app.aiProfile.welcome);
    const name = await screen.findAllByText(initialConfig.app.aiProfile.name);
    const expectedDate = formatDateByLocale(serverHistoryMock[0].time);
    // Act
    act(mockServerHistoryEmit);

    const dateElement = root.container.querySelector('[data-e2e="stream-assistant-msg-date"]');
    const historyElements = root.container.querySelectorAll('[data-e2e="history-item"]');
    const userFormElement = root.container.querySelector('[data-e2e="user-form"]');
    const emailFormElement = root.container.querySelector('[data-e2e="email-form"]');

    // Assert
    expect(dateElement.textContent).toBe(expectedDate);
    expect(historyElements.length).toBe(serverHistoryMock.length);
    expect(userFormElement).toBeNull();
    expect(emailFormElement).toBeNull();

    expect(items).toHaveLength(1);
    expect(name).toHaveLength(2);

    const { meta, config, chat } = root.store.getState();
    expect(meta).toStrictEqual({ ...initialConfig.meta, region });
    expect(config.aiProfile).toStrictEqual(initialConfig.app.aiProfile);
    expect(config.translations).toStrictEqual(initialConfig.app.translations);
    expect(chat.historyIds.length).toStrictEqual(serverHistoryMock.length);
    expect(chat.historyData[[...chat.historyIds].pop()].content[1].buttons.length).toBe(2);
  });

  test('on chat-history event state is shown and link is visualized', async () => {
    // Act
    act(() => mockServerHistoryEmit(serverHistoryMockWithLink));

    const historyElements = root.container.querySelectorAll('[data-e2e="history-item"]');
    const userFormElement = root.container.querySelector('[data-e2e="user-form"]');
    const emailFormElement = root.container.querySelector('[data-e2e="email-form"]');
    const quizTriggerButton = root.container.querySelector('[data-e2e="quiz-trigger-btn"]');
    const lastMessageElement = historyElements[historyElements.length - 1].querySelector('a');

    // Assert
    expect(historyElements.length).toBe(serverHistoryMockWithLink.length);
    expect(lastMessageElement.textContent).toBe('https://test.com');
    expect(userFormElement).toBeNull();
    expect(emailFormElement).toBeNull();
    expect(quizTriggerButton).toBeVisible();

    const { config, chat, intentions } = root.store.getState();
    expect(chat.historyIds.length).toStrictEqual(serverHistoryMockWithLink.length);
    expect(chat.connected).toBeTruthy();
    expect(intentions.link.isVisible).toBeTruthy();
    expect(intentions.link.href).toBe('https://test.com');
    expect(intentions.link.text).toBe(config.translations.mealButton);
  });

  test('on link click chat is hidden link is hidden', async () => {
    // Arrange
    const nodeElem = { remove: jest.fn() };
    const querySelectorSpy = jest.spyOn(document, 'querySelector');
    spies.push(querySelectorSpy);
    querySelectorSpy.mockImplementation(() => nodeElem);

    // Act
    act(() => mockServerHistoryEmit(serverHistoryMockWithLink));

    const linkQuiz = root.container.querySelector('[data-e2e="quiz-trigger-btn"]');
    fireEvent.click(linkQuiz);

    // Assert
    const { chat } = root.store.getState();
    expect(localStorage.getItem(LINK_CLICKED_KEY)).toBeTruthy();
    expect(document.querySelector).toHaveBeenCalledWith('#chatbot-container');
    expect(chat.closed).toBeTruthy();
  });

  test(`on special message [${intent.type.email}] to show email form`, async () => {
    // Act
    act(() => mockServerHistoryEmit(serverHistoryMockWithEmailIntent));

    const emailFormElement = root.container.querySelector('[data-e2e="email-form"]');
    const userFormElement = root.container.querySelector('[data-e2e="user-form"]');

    // Assert
    const { intentions } = root.store.getState();
    expect(emailFormElement).toBeInTheDocument();
    expect(userFormElement).toBeNull();
    expect(intentions.response.isFormVisible).toBe(false);
    expect(intentions.payment.isButtonVisible).toBe(false);
    expect(intentions.email.isFormVisible).toBe(true);
  });

  test(`on special message [${intent.type.payment}] to show payment button and special message with price`, async () => {
    // Act
    act(() => {
      jest.advanceTimersByTime(STORING_CHECKER_INTERVAL);
      mockServerHistoryEmit(serverHistoryMockWithPaymentIntent);
    });

    const emailFormElement = root.container.querySelector('[data-e2e="email-form"]');
    const userFormElement = root.container.querySelector('[data-e2e="user-form"]');
    const paymentButtonElement = root.container.querySelector('[data-e2e="payment-form-trigger-btn"]');
    const mainContainer = root.container;

    // Assert
    const { intentions } = root.store.getState();
    expect(emailFormElement).toBeNull();
    expect(userFormElement).toBeNull();
    expect(paymentButtonElement).toBeInTheDocument();
    expect(intentions.response.isFormVisible).toBe(false);
    expect(intentions.email.isFormVisible).toBe(false);
    expect(intentions.payment.isButtonVisible).toBe(true);
    expect(mainContainer).toHaveTextContent(initialConfig.meta.pd.displayPlanPrice);
  });

  test('on click payment button intent is being emitted and button is disabled', async () => {
    // Act
    act(() => mockServerHistoryEmit(serverHistoryMockWithPaymentIntent));

    const paymentButtonElement = root.container.querySelector('[data-e2e="payment-form-trigger-btn"]');
    fireEvent.click(paymentButtonElement);

    // Assert
    expect(intent.core.emit).toHaveBeenCalledTimes(1);
    expect(paymentButtonElement).toBeDisabled();
  });
});

describe('AppBase, streaming events execute properly', () => {
  beforeEach(async () => { await localSetup(); });
  afterEach(localTearDown);
  test('message receival through streamStart streamData streamEnd work for text', () => {
    // Arrange
    const initialHistory = root.store.getState().chat.history;

    // Act
    act(() => dispatchStreaming(streamMocks.text));

    // Assert
    const { chat, intentions } = root.store.getState();
    expect(chat.isLoading).toBe(initialState.chat.isLoading);
    expect(chat.outgoing).toBe(initialState.chat.outgoing);
    expect(chat.error).toBe(initialState.chat.error);
    expect(intentions.response.isFormVisible).toBe(true);
    expect(chat.historyIds.length > initialHistory.length).toBeTruthy();
  });

  test('message receival through streamStart streamData streamEnd work for buttons', () => {
    // Act
    act(() => dispatchStreaming(streamMocks.buttons));

    const userFormElement = root.container.querySelector('[data-e2e="user-form"]');
    const optionButtonElements = root.container.querySelectorAll('[data-e2e="option-button"]');

    // Assert
    const { intentions } = root.store.getState();
    expect(optionButtonElements).toHaveLength(5);
    expect(intentions.response.isFormVisible).toBe(false);
    expect(userFormElement).toBeNull();
  });

  test(`message receival through streamStart streamData streamEnd work for message with [${intent.type.email}]`, () => {
    // Act
    act(() => dispatchStreaming(streamMocks.email));

    const emailFormElement = root.container.querySelector('[data-e2e="email-form"]');
    const userFormElement = root.container.querySelector('[data-e2e="user-form"]');

    // Assert
    const { intentions, chat } = root.store.getState();
    expect(chat.historyData[[...chat.historyIds].pop()].content[0].email).toBe(streamMocks.email[1].email);
    expect(intentions.email.isFormVisible).toBe(true);
    expect(emailFormElement).toBeInTheDocument();
    expect(userFormElement).not.toBeInTheDocument();
  });

  test(`message receival through streamStart streamData streamEnd work for message with [${intent.type.payment}]`, () => {
    // Act
    act(() => dispatchStreaming(streamMocks.payment));

    const paymentButtonElement = root.container.querySelector('[data-e2e="payment-form-trigger-btn"]');

    // Assert
    expect(paymentButtonElement).toBeVisible();
  });
});

describe('Close button closes chat', () => {
  const href = 'https://example.com/?utm_chat=default';
  const search = '?utm_chat=default';

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
    await localSetup();
  });

  afterEach(localTearDown);

  test('chat.closed is true after close button is clicked', async () => {
    // Arrange
    expect(window.location.search).toContain('?utm_chat=default');

    const nodeElem = { remove: jest.fn() };
    const querySelectorSpy = jest.spyOn(document, 'querySelector');
    const ioCloseSpy = jest.spyOn(io.connect(), 'close');
    spies.push(querySelectorSpy, ioCloseSpy);
    querySelectorSpy.mockImplementation(() => nodeElem);

    // Act
    act(mockServerHistoryEmit);
    const closeButton = root.container.querySelector('[data-e2e="chat-close-btn"]');
    fireEvent.click(closeButton);

    // Assert
    setTimeout(() => {
      const { chat } = root.store.getState();
      expect(chat.closed).toBeTruthy();
      expect(querySelectorSpy).toHaveBeenCalledWith('#chatbot-container');
      expect(nodeElem.remove).toHaveBeenCalled();
      expect(window.location.search).not.toContain(search);
      expect(ioCloseSpy).toHaveBeenCalled();
    }, 501);
  });
});

function mockServerHistoryEmit(history = serverHistoryMock) {
  serverSocket.emit('connect');
  serverSocket.emit(Events.chatHistory, { history, errors: [], region });
}

function dispatchStreaming(chunks) {
  serverSocket.emit('connect');
  serverSocket.emit(Events.streamStart, chunks[0]);
  chunks.slice(1, -1).forEach(chunk => serverSocket.emit(Events.streamData, chunk));
  serverSocket.emit(Events.streamEnd, [...chunks].pop());
}

async function localSetup() {
  localStorage.setItem('__pd', JSON.stringify(initialConfig.meta.pd));
  jest.useFakeTimers();
  spies.push(jest.spyOn(intent.core, 'emit'));
  const intentOnSpy = jest.spyOn(intent.core, 'on');
  spies.push(intentOnSpy);
  intentOnSpy.mockReturnValue(() => true);
  await waitFor(() => {
    root = renderWithProviders(<div id="chatbot-container"><AppBase config={initialConfig} /></div>);
  });
}

function localTearDown() {
  localStorage.clear();
  spies.forEach(spy => { spy.mockClear(); spy.mockRestore(); });
  cleanup();
  jest.useRealTimers();
  window.location = actualWindow;
}
