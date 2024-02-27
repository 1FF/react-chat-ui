/* eslint-env jest */
import { act } from 'react-dom/test-utils';

import { streamedMessage, streamedMessageWithLink, streamedMessageWithEmailIntent, streamedMessageWithPaymentIntent } from '../../src/chatMocks';
import { intent } from '../../src/main';
import initialState from '../../src/store/initialState';
import { dispatchStreaming, localSetup, localTearDown } from '../helpers';

jest.useFakeTimers();

let root;
describe('AppBase, streaming events execute properly', () => {

  beforeEach(async () => root = await localSetup());
  afterEach(localTearDown);

  test('message receival through streamStart streamData streamEnd work for streamed data without any special arguments', () => {
    // Arrange
    const initialHistory = root.store.getState().chat.history;

    // Act
    act(() => dispatchStreaming(['hello']));
    const userFormElement = root.container.querySelector('[data-e2e="user-form"]');

    // Assert
    const { chat } = root.store.getState();
    expect(chat.isLoading).toBe(initialState.chat.isLoading);
    expect(chat.outgoing).toBe(initialState.chat.outgoing);
    expect(chat.incoming).toBe(initialState.chat.incoming);
    expect(chat.error).toBe(initialState.chat.error);
    expect(chat.textToParse).toBe(initialState.chat.textToParse);
    expect(chat.history.length > initialHistory.length).toBeTruthy();
    expect(userFormElement).toBeInTheDocument();
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
    expect(emailFormElement).not.toBeInTheDocument();
    expect(lastMessageElement).toBeInTheDocument();
    expect(linkQuiz).toBeInTheDocument();
    expect(userFormElement).not.toBeInTheDocument();
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
