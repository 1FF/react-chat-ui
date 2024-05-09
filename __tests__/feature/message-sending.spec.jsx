/* eslint-env jest */
import { fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { io } from 'socket.io-client';

import { serverSocket } from '../../__mocks__/socket.io-client';
import AppBase from '../../src/components/AppBase';
import { chat as getInitialConfig, Events, initialMessage, Roles, textInitial, textOnly } from '../../src/config';
import { TYPING_TIMEOUT } from '../../src/config/env';
import { uuidV4 } from '../../src/utils';
import renderWithProviders from '../../src/utils/storeMockWrapper';
import { localTearDown } from '../helpers';

const serverData = {
  region: faker.location.country(),
  history: [],
  errors: [],
};

jest.useFakeTimers();

let root;

describe('Chat-history event works and visualizes items accordingly', () => {
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

    serverData.history = [];
    serverData.errors = [];
    serverData.region = faker.location.country();
    serverData.term = term;
    serverData.threadId = threadId;
  });

  afterEach(localTearDown);

  test(`sends single message successfully when there is no interaction with the field for ${TYPING_TIMEOUT}ms`, () => {
    // Arrange
    const emitSpy = jest.spyOn(io.connect(), 'emit');

    act(() => {
      root = renderWithProviders(
        <div id="chatbot-container">
          <AppBase
            config={getInitialConfig({
              id: uuidV4(),
              purpose: '',
              close: { visible: true },
              configuredMessage: textOnly,
            })}
          />
        </div>,
      );
    });

    // Act
    act(() => {
      serverSocket.emit(Events.chatHistory, serverData);
      jest.advanceTimersByTime(initialMessage.length * 1000 * initialMessage.length - 1);
    });

    const userFormElement = root.container.querySelector('[data-e2e="user-form"]');
    const userInputElement = root.container.querySelector('[data-e2e="message-input"]');
    const userMessage = faker.lorem.words(3);
    const previousGroupId = root.store.getState().chat.lastGroupId;
    act(() => {
      fireEvent.input(userInputElement, { target: { value: userMessage } });
      fireEvent.submit(userFormElement);
      jest.advanceTimersByTime(TYPING_TIMEOUT);
    });

    // Assert
    const { chat } = root.store.getState();
    const lastMessage = chat.record[threadId].historyData[[...chat.record[threadId].historyIds].pop()];
    expect(lastMessage.role).toBe(Roles.user);
    expect(chat.typingTimeoutExpired).toBe(true);
    expect(chat.lastGroupId).not.toBe(previousGroupId);
    expect(chat.isLoading).toBe(true);
    const [firstParam, secondParam, thirdParam] = [...emitSpy.mock.calls].pop();
    expect(firstParam).toBe(Events.chat);
    expect(secondParam.role).toBe(Roles.user);
    expect(secondParam.message).toBe(userMessage);
    expect(thirdParam).toEqual(expect.any(Function));
  });

  test(`sends multiple messages successfully when there is no interaction with the field for ${TYPING_TIMEOUT}ms`, () => {
    // Arrange
    const emitSpy = jest.spyOn(io.connect(), 'emit');

    act(() => {
      root = renderWithProviders(
        <div id="chatbot-container">
          <AppBase
            config={getInitialConfig({
              id: uuidV4(),
              purpose: '',
              close: { visible: true },
              configuredMessage: textOnly,
            })}
          />
        </div>,
      );
    });

    // Act
    act(() => {
      serverSocket.emit(Events.chatHistory, serverData);
      jest.advanceTimersByTime(initialMessage.length * 1000 * initialMessage.length - 1);
    });

    const userFormElement = root.container.querySelector('[data-e2e="user-form"]');
    const userInputElement = root.container.querySelector('[data-e2e="message-input"]');
    const userMessage = faker.lorem.words(3);
    const userMessageSecond = faker.lorem.words(3);
    const previousGroupId = root.store.getState().chat.lastGroupId;
    act(() => {
      fireEvent.input(userInputElement, { target: { value: userMessage } });
      fireEvent.submit(userFormElement);
      fireEvent.input(userInputElement, { target: { value: userMessageSecond } });
      fireEvent.submit(userFormElement);
      jest.advanceTimersByTime(TYPING_TIMEOUT);
    });

    // Assert
    const { chat } = root.store.getState();
    const lastMessage = chat.record[threadId].historyData[[...chat.record[threadId].historyIds].pop()];
    expect(lastMessage.role).toBe(Roles.user);
    expect(chat.typingTimeoutExpired).toBe(true);
    expect(chat.lastGroupId).not.toBe(previousGroupId);
    expect(chat.isLoading).toBe(true);
    const [firstParam, secondParam, thirdParam] = [...emitSpy.mock.calls].pop();
    expect(firstParam).toBe(Events.chat);
    expect(secondParam.role).toBe(Roles.user);
    expect(secondParam.message).toBe([userMessage, userMessageSecond].join('\n'));
    expect(thirdParam).toEqual(expect.any(Function));
  });
});
