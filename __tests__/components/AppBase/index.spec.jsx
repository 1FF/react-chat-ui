/* eslint-env jest */
import AppBase from '@/components/AppBase';
import { events } from '@/config';
import { formatDateByLocale } from '@/utils';
import renderWithProviders from '@/utils/storeMockWrapper';
import { fireEvent, screen, waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import mockio, { serverSocket, cleanup, io } from 'socket.io-client';
import { initialConfig, history as defaultHistory, historyWithLink, historyWithEmailIntent, historyWithPaymentIntent, pd, streamedMessage, streamedMessageWithLink, streamedMessageWithEmailIntent, streamedMessageWithPaymentIntent } from '@/chatMocks';
import { CHAT_SEEN_KEY, LINK_CLICKED_KEY, STORING_CHECKER_INTERVAL } from '@/config/env';
import { intent } from '@/main';
import initialState from '@/store/initialState';

jest.useFakeTimers();

let root;
const spies = [];
describe('AppBase, chat-history event and execute properly', () => {
  beforeEach(localSetup);
  afterEach(localTearDown);

  test('on chat-history event state is shown and saved properly', async () => {
    const items = await screen.findAllByText(initialConfig.app.aiProfile.welcome);
    const name = await screen.findAllByText(initialConfig.app.aiProfile.name);
    const expectedDate = formatDateByLocale(defaultHistory[0].time);

    // Act
    act(dispatchSocketChange);

    const dateElement = root.container.querySelector('[data-e2e="stream-assistant-msg-date"]');
    const historyElements = root.container.querySelectorAll('[data-e2e="history-item"]');
    const userFormElement = root.container.querySelector('[data-e2e="user-form"]');
    const emailFormElement = root.container.querySelector('[data-e2e="email-form"]');

    // Assert
    expect(dateElement.textContent).toEqual(expectedDate);
    expect(historyElements.length).toEqual(defaultHistory.length);
    expect(userFormElement).not.toBeNull();
    expect(emailFormElement).toBeNull();

    expect(items).toHaveLength(1);
    expect(name).toHaveLength(2);

    const { meta, config, chat } = root.store.getState();
    expect(meta).toStrictEqual(initialConfig.meta);
    expect(config.aiProfile).toStrictEqual(initialConfig.app.aiProfile);
    expect(config.translations).toStrictEqual(initialConfig.app.translations);
    expect(chat.history.length).toStrictEqual(defaultHistory.length);
    expect(chat.history[0].options.length).toEqual(2);
  });

  test('on chat-history event state is shown and link is visualized', async () => {
    // Act
    act(() => dispatchSocketChange(historyWithLink));

    const historyElements = root.container.querySelectorAll('[data-e2e="history-item"]');
    const userFormElement = root.container.querySelector('[data-e2e="user-form"]');
    const emailFormElement = root.container.querySelector('[data-e2e="email-form"]');
    const lastMessageElement = historyElements[historyElements.length - 1].querySelector('a');

    // Assert
    expect(historyElements.length).toEqual(historyWithLink.length);
    expect(lastMessageElement.textContent).toEqual('https://test123.com');
    expect(userFormElement).toBeNull();
    expect(emailFormElement).toBeNull();

    const { config, chat, intentions } = root.store.getState();
    expect(chat.history.length).toStrictEqual(historyWithLink.length);
    expect(chat.history[0].options.length).toEqual(2);
    expect(chat.connected).toBeTruthy();
    expect(intentions.link.isVisible).toBeTruthy();
    expect(intentions.link.href).toBe('https://test123.com');
    expect(intentions.link.text).toBe(config.translations.mealButton);
  });

  test('on link click chat is hidden link is hidden', async () => {
    // Arrange
    const nodeElem = { remove: jest.fn() };
    const querySelectorSpy = jest.spyOn(document, 'querySelector');
    spies.push(querySelectorSpy);
    querySelectorSpy.mockImplementation(() => nodeElem);

    // Act
    act(() => dispatchSocketChange(historyWithLink));

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
    act(() => dispatchSocketChange(historyWithEmailIntent));

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
      dispatchSocketChange(historyWithPaymentIntent);
    });

    const emailFormElement = root.container.querySelector('[data-e2e="email-form"]');
    const userFormElement = root.container.querySelector('[data-e2e="user-form"]');
    const paymentButtonElement = root.container.querySelector('[data-e2e="payment-form-trigger-btn"]');

    // Assert
    const { intentions, chat } = root.store.getState();
    expect(emailFormElement).toBeNull();
    expect(userFormElement).toBeNull();
    expect(paymentButtonElement).toBeInTheDocument();
    expect(intentions.response.isFormVisible).toBe(false);
    expect(intentions.email.isFormVisible).toBe(false);
    expect(intentions.payment.isButtonVisible).toBe(true);
    expect(chat.history[chat.history.length - 1].content).toContain(pd.displayPlanPrice);
  });

  test('on click payment button intent is being emitted and button is disabled', async () => {
    // Act
    act(() => dispatchSocketChange(historyWithPaymentIntent));

    const paymentButtonElement = root.container.querySelector('[data-e2e="payment-form-trigger-btn"]');
    fireEvent.click(paymentButtonElement);

    // Assert
    expect(intent.core.emit).toHaveBeenCalledTimes(1);
    expect(paymentButtonElement).toBeDisabled();
  });
});

describe('AppBase, streaming events execute properly', () => {
  beforeEach(localSetup);
  afterEach(localTearDown);
  test('message receival through streamStart streamData streamEnd work for streamed data without any special arguments', () => {
    // Arrange
    const initialHistory = root.store.getState().chat.history;

    // Act
    act(() => dispatchStreaming(['hello']));

    // Assert
    const { chat, intentions } = root.store.getState();
    expect(chat.isLoading).toBe(initialState.chat.isLoading);
    expect(chat.outgoing).toBe(initialState.chat.outgoing);
    expect(chat.incoming).toBe(initialState.chat.incoming);
    expect(chat.error).toBe(initialState.chat.error);
    expect(chat.textToParse).toBe(initialState.chat.textToParse);
    expect(intentions.response.isFormVisible).toBe(true);
    expect(chat.history.length > initialHistory.length).toBeTruthy();
  });

  test('message receival through streamStart streamData streamEnd work for message with square brackets', () => {
    // Act
    act(() => dispatchStreaming(streamedMessage));

    const userFormElement = root.container.querySelector('[data-e2e="user-form"]');
    const optionButtonElements = root.container.querySelectorAll('[data-e2e="option-button"]');

    // Assert
    const { chat, intentions } = root.store.getState();
    expect(chat.history[0].options.length > 0).toBeTruthy();
    expect(optionButtonElements).toHaveLength(chat.history[0].options.length);
    expect(intentions.response.isFormVisible).toBe(false);
    expect(userFormElement).toBeNull();
  });

  test('message receival through streamStart streamData streamEnd work for message with link', () => {
    // Act
    act(() => dispatchStreaming(streamedMessageWithLink));

    const linkQuiz = root.container.querySelector('[data-e2e="quiz-trigger-btn"]');
    const historyElements = root.container.querySelectorAll('[data-e2e="history-item"]');
    const userFormElement = root.container.querySelector('[data-e2e="user-form"]');
    const emailFormElement = root.container.querySelector('[data-e2e="email-form"]');
    const lastMessageElement = historyElements[historyElements.length - 1].querySelector('a');

    // Assert
    expect(linkQuiz).toBeInTheDocument();
    expect(userFormElement).not.toBeInTheDocument();
    expect(emailFormElement).not.toBeInTheDocument();
    expect(lastMessageElement).toBeInTheDocument();
  });

  test(`message receival through streamStart streamData streamEnd work for message with [${intent.type.email}]`, () => {
    // Act
    act(() => dispatchStreaming(streamedMessageWithEmailIntent));

    const emailFormElement = root.container.querySelector('[data-e2e="email-form"]');
    const userFormElement = root.container.querySelector('[data-e2e="user-form"]');

    // Assert
    expect(emailFormElement).toBeInTheDocument();
    expect(userFormElement).not.toBeInTheDocument();
  });

  test(`message receival through streamStart streamData streamEnd work for message with [${intent.type.payment}]`, () => {
    // Act
    act(() => dispatchStreaming(streamedMessageWithPaymentIntent));

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
    act(dispatchSocketChange);
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

function dispatchSocketChange(history = defaultHistory) {
  serverSocket.emit('connect');
  serverSocket.emit(events.chatHistory, { history, errors: [], region: 'frankfurt' });
}

function dispatchStreaming(chunks) {
  serverSocket.emit('connect');
  serverSocket.emit(events.streamStart);
  chunks.forEach(chunk => serverSocket.emit(events.streamData, { chunk, messages: [], errors: [] }));
  serverSocket.emit(events.streamEnd);
}

async function localSetup() {
  localStorage.setItem('__pd', JSON.stringify(pd));
  spies.push(jest.spyOn(intent.core, 'emit'));
  const intentOnSpy = jest.spyOn(intent.core, 'on');
  spies.push(intentOnSpy);
  intentOnSpy.mockReturnValue(() => true);
  await waitFor(() => {
    root = renderWithProviders(<div id="chatbot-container"><AppBase config={ initialConfig } /></div>);
  });
}

function localTearDown() {
  localStorage.clear();
  spies.forEach(spy => spy.mockRestore());
  cleanup();
}
