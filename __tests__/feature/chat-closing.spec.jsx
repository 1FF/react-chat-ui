/* eslint-env jest */
import { fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { io } from 'socket.io-client';

import { initialConfig } from '../../src/chatMocks';
import { setConfig } from '../../src/store/slices/config';
import { dispatchSocketChange, localSetup, localTearDown } from '../helpers';
import { DEFAULT_CLOSE_HREF, SCROLL_STOP_CLASS } from '../../src/config/env';

let root;
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
    root = await localSetup();
  });

  afterEach(localTearDown);

  test('chat.closed is true after close button is clicked', async () => {
    jest.useFakeTimers();

    // Arrange
    expect(window.location.search).toContain('?utm_chat=default');

    const nodeElem = { remove: jest.fn() };
    const querySelectorSpy = jest.spyOn(document, 'querySelector');
    const ioCloseSpy = jest.spyOn(io.connect(), 'close');
    global.spies.push(querySelectorSpy, ioCloseSpy);
    querySelectorSpy.mockImplementation(() => nodeElem);

    // Act
    act(() => {
      dispatchSocketChange();
      root.store.dispatch(setConfig({ ...initialConfig, close: { href: '/', visible: true } }));
    });
    fireEvent.click(root.container.querySelector('[data-e2e="chat-close-btn"]'));
    act(() => jest.runAllTimers());

    // Assert
    const { chat, config } = root.store.getState();
    expect(chat.closed).toBeTruthy();
    expect(querySelectorSpy).toHaveBeenCalledWith('#chatbot-container');
    expect(document.body.classList).not.toContain(SCROLL_STOP_CLASS);
    expect(ioCloseSpy).toHaveBeenCalled();
    expect(window.location.href).toBe(config.close.href);
    jest.useRealTimers();
  });

  test('chat.closed is true after close button is clicked and no href is set in the initial config', async () => {
    jest.useFakeTimers();

    // Arrange
    expect(window.location.search).toContain('?utm_chat=default');

    const nodeElem = { remove: jest.fn() };
    const querySelectorSpy = jest.spyOn(document, 'querySelector');
    const ioCloseSpy = jest.spyOn(io.connect(), 'close');
    global.spies.push(querySelectorSpy, ioCloseSpy);
    querySelectorSpy.mockImplementation(() => nodeElem);

    // Act
    act(() => {
      dispatchSocketChange();
      root.store.dispatch(setConfig({ ...initialConfig, close: { visible: true } }));
    });

    fireEvent.click(root.container.querySelector('[data-e2e="chat-close-btn"]'));
    act(() => jest.runAllTimers());

    // Assert
    const { chat } = root.store.getState();
    expect(chat.closed).toBeTruthy();
    expect(querySelectorSpy).toHaveBeenCalledWith('#chatbot-container');
    expect(document.body.classList).not.toContain(SCROLL_STOP_CLASS);
    expect(ioCloseSpy).toHaveBeenCalled();
    expect(window.location.href).toBe(DEFAULT_CLOSE_HREF);
    jest.useRealTimers()
  });
});
