/* eslint-env jest */
import { fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { io } from 'socket.io-client';

import { serverSocket } from '../../__mocks__/socket.io-client';
import AppBase from '../../src/components/AppBase';
import { chat as getInitialConfig, Events, initialMessage } from '../../src/config';
import { SCROLL_STOP_CLASS } from '../../src/config/env';
import { setConnected } from '../../src/store/slices/chat';
import { uuidV4 } from '../../src/utils';
import renderWithProviders from '../../src/utils/storeMockWrapper';
import { localTearDown } from '../helpers';

let root;
describe('Close button closes chat', () => {
  const term = 'default'
  const href = `https://example.com/?utm_chat=${term}}`;
  const search = `?utm_chat=${term}`;

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

  test('chat.closed is true after close button is clicked', async () => {
    // Arrange
    jest.useFakeTimers();
    act(() => {
      root = renderWithProviders(
        <div id="chatbot-container">
          <AppBase config={getInitialConfig({ id: uuidV4(), purpose: '', close: { visible: true } })} />
        </div>
      );
      root.store.dispatch(setConnected(true));
    });

    const serverData = {
      'region': faker.location.country(),
      'history': [],
      'errors': []
    }
    act(() => {
      serverSocket.emit(Events.chatHistory, serverData);
      jest.advanceTimersByTime((initialMessage.length * 1000) * initialMessage.length - 1);
    });

    expect(window.location.search).toContain('?utm_chat=default');

    const nodeElem = { remove: jest.fn() };
    const querySelectorSpy = jest.spyOn(document, 'querySelector');
    const ioCloseSpy = jest.spyOn(io.connect(), 'close');
    global.spies.push(querySelectorSpy, ioCloseSpy);
    querySelectorSpy.mockImplementation(() => nodeElem);

    // Act
    fireEvent.click(root.container.querySelector('[data-e2e="chat-close-btn"]'));
    act(() => jest.advanceTimersByTime(500));

    // Assert
    const { chat, config } = root.store.getState();
    expect(chat.closed).toBeTruthy();
    expect(querySelectorSpy).toHaveBeenCalledWith('#chatbot-container');
    expect(document.body.classList).not.toContain(SCROLL_STOP_CLASS);
    expect(ioCloseSpy).toHaveBeenCalled();
    expect(window.location.href).toBe(config.close.href);
    jest.useRealTimers();
  });

  test('chat.closed is true after close button is clicked an href is being used correctly when set', async () => {
    // Arrange
    jest.useFakeTimers();
    const closeConfig = { visible: true, href: '/test' };
    act(() => {
      root = renderWithProviders(
        <div id="chatbot-container">
          <AppBase config={getInitialConfig({ id: uuidV4(), purpose: '', close: closeConfig })} />
        </div>
      );
      root.store.dispatch(setConnected(true));
    });

    const serverData = {
      'region': faker.location.country(),
      'history': [],
      'errors': []
    }
    act(() => {
      serverSocket.emit(Events.chatHistory, serverData);
      jest.advanceTimersByTime((initialMessage.length * 1000) * initialMessage.length - 1);
    });

    expect(window.location.search).toContain('?utm_chat=default');

    const nodeElem = { remove: jest.fn() };
    const querySelectorSpy = jest.spyOn(document, 'querySelector');
    const ioCloseSpy = jest.spyOn(io.connect(), 'close');
    global.spies.push(querySelectorSpy, ioCloseSpy);
    querySelectorSpy.mockImplementation(() => nodeElem);

    // Act
    fireEvent.click(root.container.querySelector('[data-e2e="chat-close-btn"]'));
    act(() => jest.advanceTimersByTime(500));

    // Assert
    const { chat, config } = root.store.getState();
    expect(chat.closed).toBeTruthy();
    expect(querySelectorSpy).toHaveBeenCalledWith('#chatbot-container');
    expect(document.body.classList).not.toContain(SCROLL_STOP_CLASS);
    expect(ioCloseSpy).toHaveBeenCalled();
    expect(window.location.href).toBe(config.close.href);
    expect(window.location.href).toBe(closeConfig.href);
    jest.useRealTimers();
  });
});
