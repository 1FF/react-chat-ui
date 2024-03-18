/* eslint-env jest */
import { fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

import { uuidV4 } from '../../src/utils';
import { intent } from '../../src/main';
import { localTearDown } from '../helpers';
import AppBase from '../../src/components/AppBase';
import renderWithProviders from '../../src/utils/storeMockWrapper';
import { setConnected } from '../../src/store/slices/chat';
import { serverSocket } from '../../__mocks__/socket.io-client';
import { Events, Roles, chat as getInitialConfig, initialMessage } from '../../src/config';
import { io } from 'socket.io-client';
import { Intentions } from '../../src/config/enums';

const textProbe = () => ({ 'type': 'text', 'text': faker.lorem.text(), 'sequence': 2 });
const contentMock = {
  text: [textProbe(), textProbe()],
  email: [
    textProbe(),
    { 'type': 'email', 'email': faker.lorem.text(), 'sequence': 2 },
  ],
  payment: [
    textProbe(),
    { 'type': 'payment', 'payment': faker.lorem.text(), 'sequence': 2 },
  ],
};

const serverData = {
  "region": faker.location.country(),
  "history": [],
  "errors": [],
}

jest.useFakeTimers();

let root;
const chatConfig = getInitialConfig({ id: uuidV4(), purpose: '', close: { visible: true } });
describe('Chat-history event works and visualizes items accordingly', () => {
  beforeEach(() => {
    serverData.history = [];
    serverData.errors = [];
    serverData.region = faker.location.country();
  })
  afterEach(localTearDown);

  test('loader is visible on initiation and not connected to socket', () => {
    // Arrange
    act(() => {
      root = renderWithProviders(
        <div id="chatbot-container">
          <AppBase config={getInitialConfig({ id: uuidV4(), purpose: '', close: {} })} />
        </div>
      );
    });

    // Assert
    const historyElements = root.container.querySelectorAll('[data-e2e="history-item"]');
    const userFormElement = root.container.querySelector('[data-e2e="user-form"]');
    const emailFormElement = root.container.querySelector('[data-e2e="email-form"]');
    expect(root.container.querySelector('[data-e2e="stream-response-loader"]')).toBeVisible();
    expect(userFormElement).toBeNull();
    expect(emailFormElement).toBeNull();

    const { chat } = root.store.getState();
    expect(chat.isLoading).toBe(true);
    expect(historyElements.length).toEqual(chat.historyIds.length);
  });

  test('on chat-history event state is shown and saved properly', async () => {
    // Arrange
    act(() => {
      root = renderWithProviders(
        <div id="chatbot-container">
          <AppBase config={getInitialConfig({ id: uuidV4(), purpose: '', close: { visible: true } })} />
        </div>
      );
      root.store.dispatch(setConnected(true));
    });

    serverData.history = [{
      id: uuidV4(),
      role: Roles.assistant,
      time: new Date().getTime(),
      content: contentMock.text,
    }];

    // Act
    act(() => {
      serverSocket.emit(Events.chatHistory, serverData);
      jest.advanceTimersByTime((initialMessage.length * 1000) * initialMessage.length - 1);
    });

    const dateElement = root.container.querySelector('[data-e2e="stream-assistant-msg-date"]');
    const historyElements = root.container.querySelectorAll('[data-e2e="history-item"]');
    const userFormElement = root.container.querySelector('[data-e2e="user-form"]');
    const emailFormElement = root.container.querySelector('[data-e2e="email-form"]');

    // Assert
    expect(dateElement).not.toBeNull();
    expect(userFormElement).toBeVisible();
    expect(emailFormElement).toBeNull();

    const { meta, config, chat } = root.store.getState();
    expect(historyElements.length).toEqual(chat.historyIds.length);
    expect(meta.region).toStrictEqual(serverData.region);
    expect(config.aiProfile).toStrictEqual(chatConfig.app.aiProfile);
    expect(config.translations).toStrictEqual(chatConfig.app.translations);
  });

  test('on click payment button intent is being emitted and button is disabled', async () => {
    jest.spyOn(intent.core, 'emit');
    act(() => {
      root = renderWithProviders(<div id="chatbot-container">
        <AppBase config={getInitialConfig({ id: uuidV4(), purpose: '', close: { visible: true } })} />
      </div>);
      root.store.dispatch(setConnected(true));
    });

    // Act
    serverData.history = [
      {
        id: uuidV4(),
        role: Roles.assistant,
        time: new Date().getTime(),
        content: contentMock.payment
      },
    ];

    act(() => {
      serverSocket.emit(Events.chatHistory, serverData);
      jest.advanceTimersByTime((initialMessage.length * 1000) * initialMessage.length - 1);
    });

    const paymentButtonElement = root.container.querySelector('[data-e2e="payment-form-trigger-btn"]');
    fireEvent.click(paymentButtonElement);

    // Assert
    expect(intent.core.emit).toHaveBeenCalledTimes(1);
    expect(paymentButtonElement).toBeDisabled();
  });

  test('email form is visualized when last message contains type: email', async () => {
    act(() => {
      root = renderWithProviders(<div id="chatbot-container">
        <AppBase config={getInitialConfig({ id: uuidV4(), purpose: '', close: { visible: true } })} />
      </div>);
      root.store.dispatch(setConnected(true));
    });

    // Act
    serverData.history = [
      {
        id: uuidV4(),
        role: Roles.assistant,
        time: new Date().getTime(),
        content: contentMock.email
      },
    ];

    act(() => {
      serverSocket.emit(Events.chatHistory, serverData);
      jest.advanceTimersByTime((initialMessage.length * 1000) * initialMessage.length - 1);
    });

    const userFormElement = root.container.querySelector('[data-e2e="user-form"]');
    const emailFormElement = root.container.querySelector('[data-e2e="email-form"]');
    const loaderElement = root.container.querySelector('[data-e2e="stream-response-loader"]');
    const ctaElement = root.container.querySelector('[data-e2e="quiz-trigger-btn"]');

    // Assert
    expect(userFormElement).toBeNull();
    expect(emailFormElement).toBeVisible();
    expect(loaderElement).toBeNull();
    expect(ctaElement).toBeNull();

    const { chat } = root.store.getState();
    expect(chat.isLoading).toBe(false);
    expect(chat.isStreaming).toBe(false);
  });

  test('email form submitted does not submit the email when the field is empty', async () => {
    jest.spyOn(intent.core, 'emit');
    act(() => {
      root = renderWithProviders(<div id="chatbot-container">
        <AppBase config={getInitialConfig({ id: uuidV4(), purpose: '', close: { visible: true } })} />
      </div>);
      root.store.dispatch(setConnected(true));
    });

    // Act
    serverData.history = [
      {
        id: uuidV4(),
        role: Roles.assistant,
        time: new Date().getTime(),
        content: contentMock.email
      },
    ];

    act(() => {
      serverSocket.emit(Events.chatHistory, serverData);
      jest.advanceTimersByTime((initialMessage.length * 1000) * initialMessage.length - 1);
    });

    const emailFormElement = root.container.querySelector('[data-e2e="email-form"]');
    fireEvent.submit(emailFormElement)
    // Assert
    expect(intent.core.emit).toHaveBeenCalledTimes(0);
  });

  test('email form submitted: emits email and sets state properly', async () => {
    const currentEmail = faker.internet.email();
    jest.spyOn(intent.core, 'emit');
    act(() => {
      root = renderWithProviders(<div id="chatbot-container">
        <AppBase config={getInitialConfig({ id: uuidV4(), purpose: '', close: { visible: true } })} />
      </div>);
      root.store.dispatch(setConnected(true));
    });

    // Act
    serverData.history = [
      {
        id: uuidV4(),
        role: Roles.assistant,
        time: new Date().getTime(),
        content: contentMock.email
      },
    ];

    act(() => {
      serverSocket.emit(Events.chatHistory, serverData);
      jest.advanceTimersByTime((initialMessage.length * 1000) * initialMessage.length - 1);
    });

    const emailFormElement = root.container.querySelector('[data-e2e="email-form"]');
    const emailInputElement = root.container.querySelector('[data-e2e="email-input"]');
    fireEvent.input(emailInputElement, { target: { value: currentEmail } });
    fireEvent.submit(emailFormElement);

    // Assert
    const { intentions } = root.store.getState()
    expect(intent.core.emit).toHaveBeenCalledWith(Intentions.email, { email: currentEmail });
    expect(intentions.email.isLoading).toBe(true);
    expect(intentions.email.current).toBe(currentEmail);
  });

  test('on chat-history last message is of type: text footer props are set correctly and visualized response field', async () => {
    act(() => {
      root = renderWithProviders(
        <div id="chatbot-container">
          <AppBase config={getInitialConfig({ id: uuidV4(), purpose: '', close: { visible: true } })} />
        </div>
      );
      root.store.dispatch(setConnected(true));
    });
    serverData.history = [
      {
        id: uuidV4(),
        role: Roles.assistant,
        time: new Date().getTime(),
        content: contentMock.text,
      }]

    // Act
    act(() => {
      serverSocket.emit(Events.chatHistory, serverData);
      jest.advanceTimersByTime((initialMessage.length * 1000) * initialMessage.length - 1);
    });

    const dateElement = root.container.querySelector('[data-e2e="stream-assistant-msg-date"]');
    const userFormElement = root.container.querySelector('[data-e2e="user-form"]');
    const emailFormElement = root.container.querySelector('[data-e2e="email-form"]');
    const loaderElement = root.container.querySelector('[data-e2e="stream-response-loader"]');
    const ctaElement = root.container.querySelector('[data-e2e="quiz-trigger-btn"]');

    // Assert
    expect(dateElement).not.toBeNull();
    expect(userFormElement).toBeVisible();
    expect(emailFormElement).toBeNull();
    expect(loaderElement).toBeNull();
    expect(ctaElement).toBeNull();

    const { chat } = root.store.getState();
    expect(chat.isLoading).toBe(false);
    expect(chat.isStreaming).toBe(false);
  });

  test('on chat-history event with errors in the callback visualizes the error', async () => {
    act(() => {
      root = renderWithProviders(
        <div id="chatbot-container">
          <AppBase config={getInitialConfig({ id: uuidV4(), purpose: '', close: { visible: true } })} />
        </div>
      );
      root.store.dispatch(setConnected(true));
    });

    // Act
    serverData.history = [
      {
        id: uuidV4(),
        role: Roles.assistant,
        time: new Date().getTime(),
        content: contentMock.text,
      },
    ];
    serverData.errors = [faker.lorem.text()];

    act(() => {
      serverSocket.emit(Events.chatHistory, serverData);
      jest.advanceTimersByTime((initialMessage.length * 1000) * initialMessage.length - 1);
    });

    // Assert
    const errorElement = root.container.querySelector('[data-e2e="error-message"]');
    const userFormElement = root.container.querySelector('[data-e2e="user-form"]');
    const emailFormElement = root.container.querySelector('[data-e2e="email-form"]');
    expect(errorElement).toBeVisible();
    expect(errorElement.textContent).toBe(serverData.errors[0]);
    expect(userFormElement).toBeNull();
    expect(emailFormElement).toBeNull();
  });

  test('on chat-history no history received from the server must send the configured initial messages and visualize them', async () => {
    const ioEmitSpy = jest.spyOn(io.connect(), 'emit');
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

    // Assert
    expect(ioEmitSpy).toHaveBeenCalledTimes(initialMessage.length);
  });
});
