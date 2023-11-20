/* eslint-env jest */
import AppBase from '@/components/AppBase';
import { events } from '@/config';
import { formatDateByLocale } from '@/utils';
import renderWithProviders from '@/utils/storeMockWrapper';
import { fireEvent, screen, waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import mockio, { serverSocket, cleanup, io } from 'socket.io-client';
// DEV NOTE: this must be moved into another directory
import { initialConfig, history, historyWithLink } from '@/chatMocks';
import { CHAT_SEEN_KEY } from '@/config/env';

describe('AppBase, chat-history event and execute properly', () => {
  let root;

  afterEach(() => {
    localStorage.clear();
    cleanup();
  });

  test('on chat-history event state is shown and saved properly', async () => {
    // Arrange
    await waitFor(() => {
      root = renderWithProviders(<AppBase config={ initialConfig } />);
    });

    const items = await screen.findAllByText(initialConfig.app.aiProfile.welcome);
    const name = await screen.findAllByText(initialConfig.app.aiProfile.name);
    const expectedDate = formatDateByLocale(history[0].time);

    // Act
    act(() => {
      serverSocket.emit(events.chatHistory, { history, errors: [] });
    });

    const dateElement = root.container.querySelector('[data-e2e="stream-assistant-msg-date"]');
    const historyElements = root.container.querySelectorAll('[data-e2e="history-item"]');
    const userFormElement = root.container.querySelector('[data-e2e="user-form"]');
    const emailFormElement = root.container.querySelector('[data-e2e="email-form"]');

    // Assert
    expect(dateElement.textContent).toEqual(expectedDate);
    expect(historyElements.length).toEqual(history.length);
    expect(userFormElement).not.toBeNull();
    expect(emailFormElement).toBeNull();

    expect(items).toHaveLength(1);
    expect(name).toHaveLength(2);

    const { meta, config, chat } = root.store.getState();
    expect(meta).toStrictEqual(initialConfig.meta);
    expect(config.aiProfile).toStrictEqual(initialConfig.app.aiProfile);
    expect(config.translations).toStrictEqual(initialConfig.app.translations);
    expect(chat.history.length).toStrictEqual(history.length);
    expect(chat.history[0].options.length).toEqual(2);
  });

  test('on chat-history event state is shown and link is visualized', async () => {
    // Arrange
    await waitFor(() => {
      root = renderWithProviders(<AppBase config={ initialConfig } />);
    });

    // Act
    act(() => {
      serverSocket.emit('connect');
      serverSocket.emit(events.chatHistory, { history: historyWithLink, errors: [] });
    });

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
    jest.spyOn(document, 'querySelector').mockImplementation(() => nodeElem);
    await waitFor(() => {
      root = renderWithProviders(<AppBase config={ initialConfig } />);
    });

    // Act
    act(() => {
      serverSocket.emit('connect');
      serverSocket.emit(events.chatHistory, { history: historyWithLink, errors: [] });
    });

    const linkQuiz = root.container.querySelector('[data-e2e="quiz-trigger-btn"]');
    fireEvent.click(linkQuiz);

    // Assert
    const { chat } = root.store.getState();
    expect(localStorage.getItem(CHAT_SEEN_KEY)).toBeTruthy();
    expect(document.querySelector).toHaveBeenCalledWith('#chatbot-container');
    expect(nodeElem.remove).toHaveBeenCalled();
    expect(chat.closed).toBeTruthy();
  });

  test('on special message [email_intent] to show email form', async () => {
    // Arrange
    await waitFor(() => {
      root = renderWithProviders(<AppBase config={ initialConfig } />);
    });

    // Act
    act(() => {
      serverSocket.emit('connect');
      serverSocket.emit(events.chatHistory, { history: historyWithLink, errors: [] });
    });

    // Assert
  });
  test.todo('on special message [email_intent] to initialize payment button');
});
