/* eslint-env jest */
import { fireEvent, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

import { formatDateByLocale } from '../../src/utils';
import { initialConfig, history as defaultHistory, historyWithLink, historyWithEmailIntent, historyWithPaymentIntent, pd } from '../../src/chatMocks';
import { LINK_CLICKED_KEY, STORING_CHECKER_INTERVAL } from '../../src/config/env';
import { intent } from '../../src/main';
import { dispatchSocketChange, localSetup, localTearDown } from '../helpers';

jest.useFakeTimers();

let root;
const chatConfig = initialConfig();
describe('Chat-history event works and visualizes items accordingly', () => {
  beforeEach(async()=> root = await localSetup());
  afterEach(localTearDown);

  test('on chat-history event state is shown and saved properly', async () => {
    const items = await screen.findAllByText(chatConfig.app.aiProfile.welcome);
    const name = await screen.findAllByText(chatConfig.app.aiProfile.name);
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
    expect(meta).toStrictEqual(chatConfig.meta);
    expect(config.aiProfile).toStrictEqual(chatConfig.app.aiProfile);
    expect(config.translations).toStrictEqual(chatConfig.app.translations);
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

    const { chat } = root.store.getState();
    expect(chat.history.length).toStrictEqual(historyWithLink.length);
    expect(chat.history[0].options.length).toEqual(2);
    expect(chat.connected).toBeTruthy();
  });

  test('on link click chat is hidden link is hidden', async () => {
    // Arrange
    const nodeElem = { remove: jest.fn() };
    const querySelectorSpy = jest.spyOn(document, 'querySelector');
    global.spies.push(querySelectorSpy);
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
    expect(intentions.payment.isButtonVisible).toBe(false);
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
    const { chat } = root.store.getState();
    expect(emailFormElement).toBeNull();
    expect(userFormElement).toBeNull();
    expect(paymentButtonElement).toBeInTheDocument();
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
