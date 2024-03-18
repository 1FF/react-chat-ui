/* eslint-env jest */
import { fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

import { uuidV4 } from '../../src/utils';
import { localTearDown } from '../helpers';
import AppBase from '../../src/components/AppBase';
import renderWithProviders from '../../src/utils/storeMockWrapper';
import { setConnected } from '../../src/store/slices/chat';
import { serverSocket } from '../../__mocks__/socket.io-client';
import { Events, Roles, chat as getInitialConfig, initialMessage } from '../../src/config';
import { io } from 'socket.io-client';
import { TYPING_TIMEOUT } from '../../src/config/env';

const serverData = {
  "region": faker.location.country(),
  "history": [],
  "errors": [],
}

jest.useFakeTimers();

let root;

describe('Chat-history event works and visualizes items accordingly', () => {
  beforeEach(() => {
    serverData.history = [];
    serverData.errors = [];
    serverData.region = faker.location.country();
  })
  afterEach(localTearDown);

  test(`sends single message successfully when there is no interaction with the field for ${TYPING_TIMEOUT}ms`, () => {
    // Arrange
    const emitSpy = jest.spyOn(io.connect(), 'emit');

    act(() => {
      root = renderWithProviders(
        <div id="chatbot-container">
          <AppBase config={getInitialConfig({ id: uuidV4(), purpose: '', close: { visible: true } })} />
        </div>
      );
      root.store.dispatch(setConnected(true));
    });

    // Act
    act(() => {
      serverSocket.emit(Events.chatHistory, serverData);
      jest.advanceTimersByTime((initialMessage.length * 1000) * initialMessage.length - 1);
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
    const lastMessage = chat.historyData[[...chat.historyIds].pop()];
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
          <AppBase config={getInitialConfig({ id: uuidV4(), purpose: '', close: { visible: true } })} />
        </div>
      );
      root.store.dispatch(setConnected(true));
    });

    // Act
    act(() => {
      serverSocket.emit(Events.chatHistory, serverData);
      jest.advanceTimersByTime((initialMessage.length * 1000) * initialMessage.length - 1);
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
    const lastMessage = chat.historyData[[...chat.historyIds].pop()];
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
