/* eslint-env jest */
import AppBase from '@/components/AppBase';
import { events } from '@/config';
import { formatDateByLocale } from '@/utils';
import renderWithProviders from '@/utils/storeMockWrapper';
import { screen, waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import mockio, { serverSocket, cleanUp, io } from 'socket.io-client';
// DEV NOTE: this must be moved into another directory
import { initialConfig, history, historyWithLink } from '@/chatMocks';

describe('AppBase', () => {
  let root;
  it('Renders with the state passed properly to the elements', async () => {
    // Arrange
    await waitFor(() => {
      root = renderWithProviders(<AppBase config={ initialConfig } />);
    });

    const items = await screen.findAllByText(initialConfig.app.aiProfile.welcome);
    const name = await screen.findAllByText(initialConfig.app.aiProfile.name);
    const expectedDate = formatDateByLocale(history[0].time);

    // DEV NOTE: this is due to socket instance duplication;
    // serverSocket.emit('connect');

    // Act
    act(() => {
      serverSocket.emit(events.chatHistory, { history, errors: [] });
    });

    const dateElement = root.container.querySelector('[data-e2e="stream-assistant-msg-date"]');
    const historyElements = root.container.querySelectorAll('[data-e2e="history-item"]');

    // Assert
    expect(dateElement.textContent).toEqual(expectedDate);
    expect(historyElements.length).toEqual(history.length);

    expect(items).toHaveLength(1);
    expect(name).toHaveLength(2);

    const { meta, config, chat } = root.store.getState();
    expect(meta).toStrictEqual(initialConfig.meta);
    expect(config.aiProfile).toStrictEqual(initialConfig.app.aiProfile);
    expect(config.translations).toStrictEqual(initialConfig.app.translations);
    expect(chat.history.length).toStrictEqual(history.length);
    expect(chat.history[0].options.length).toEqual(2);
  });

  it('Renders with the state passed properly to the elements and displays link', async () => {
    // Arrange
    await waitFor(() => {
      root = renderWithProviders(<AppBase config={ initialConfig } />);
    });

    const items = await screen.findAllByText(initialConfig.app.aiProfile.welcome);
    const name = await screen.findAllByText(initialConfig.app.aiProfile.name);
    const expectedDate = formatDateByLocale(historyWithLink[0].time);

    // DEV NOTE: this is due to socket instance duplication;
    // serverSocket.emit('connect');

    // Act
    act(() => {
      serverSocket.emit(events.chatHistory, { history: historyWithLink, errors: [] });
    });

    const dateElement = root.container.querySelector('[data-e2e="stream-assistant-msg-date"]');
    const historyElements = root.container.querySelectorAll('[data-e2e="history-item"]');
    const userFormElement = root.container.querySelector('[data-e2e="user-form"]');
    const emailFormElement = root.container.querySelector('[data-e2e="email-form"]');
    const lastMessageElement = historyElements[historyElements.length - 1].querySelector('a');

    // Assert
    expect(dateElement.textContent).toEqual(expectedDate);
    expect(historyElements.length).toEqual(historyWithLink.length);
    expect(lastMessageElement.textContent).toEqual('https://test123.com');
    expect(userFormElement).toBeNull();
    expect(emailFormElement).toBeNull();

    expect(items).toHaveLength(1);
    expect(name).toHaveLength(2);

    const { meta, config, chat, intentions } = root.store.getState();
    expect(meta).toStrictEqual(initialConfig.meta);
    expect(config.aiProfile).toStrictEqual(initialConfig.app.aiProfile);
    expect(config.translations).toStrictEqual(initialConfig.app.translations);
    expect(chat.history.length).toStrictEqual(historyWithLink.length);
    expect(chat.history[0].options.length).toEqual(2);
    expect(intentions.link.isVisible).toBeTruthy();
    expect(intentions.link.href).toBe('https://test123.com');
    expect(intentions.link.text).toBe(config.translations.mealButton);
  });
});
