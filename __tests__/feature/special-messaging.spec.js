/* eslint-env jest */
import { act } from 'react-dom/test-utils';

import { dispatchStreaming, localTearDown } from '../helpers';
import { SPECIAL_MERCHANT, SPECIAL_SUPPORT_TICKET, SUPPORT_PURPOSE } from '../../src/config/env';
import { setLink } from '../../src/store/slices/intentions';
import { setConnected } from '../../src/store/slices/chat';
import renderWithProviders from '../../src/utils/storeMockWrapper';
import { Events, chat as getInitialConfig, initialMessage } from '../../src/config';
import { serverSocket } from '../../__mocks__/socket.io-client';
import AppBase from '../../src/components/AppBase';
import { uuidV4 } from '../../src/utils';

jest.useFakeTimers();

let root;
describe('Special messages are hidden and elements depending on them are visualized accordingly', () => {
  afterEach(localTearDown);

  test(`should arrange items accordingly when special key is ${SPECIAL_MERCHANT}`, async () => {
    // Arrange
    const recordId = uuidV4();
    act(() => {
      root = renderWithProviders(
        <div id="chatbot-container">
          <AppBase config={getInitialConfig({ id: uuidV4(), purpose: SUPPORT_PURPOSE, close: { visible: true } })} />
        </div>
      );
      root.store.dispatch(setConnected(true));
    });

    // Act
    act(() => {
      serverSocket.emit(Events.chatHistory, {
        "region": faker.location.country(),
        "history": [],
        "errors": []
      })
      jest.advanceTimersByTime((initialMessage.length * 1000) * initialMessage.length - 1);
    });

    act(() => dispatchStreaming([{
      "type": "text",
      "text": faker.lorem.text(),
      "sequence": 1,
      "id": recordId
    }, {
      "type": "special",
      "special": SPECIAL_MERCHANT,
      "sequence": 1,
      "id": recordId
    }, {
      "type": "text",
      "text": faker.lorem.text(),
      "sequence": 1,
      "id": recordId
    }]));

    const linkQuiz = root.container.querySelector('[data-e2e="quiz-trigger-btn"]');
    const userFormElement = root.container.querySelector('[data-e2e="user-form"]');
    const emailFormElement = root.container.querySelector('[data-e2e="email-form"]');

    // Assert
    expect(linkQuiz).toBeInTheDocument();
    expect(userFormElement).not.toBeInTheDocument();
    expect(emailFormElement).not.toBeInTheDocument();
  });

  test(`should arrange items accordingly when special key is ${SPECIAL_SUPPORT_TICKET}`, async () => {
    // Arrange
    const recordId = uuidV4();
    act(() => {
      root = renderWithProviders(
        <div id="chatbot-container">
          <AppBase config={getInitialConfig({ id: uuidV4(), purpose: SUPPORT_PURPOSE, close: { visible: true } })} />
        </div>);
      root.store.dispatch(setConnected(true));
    });

    // Act
    act(() => {
      serverSocket.emit(Events.chatHistory, {
        "region": faker.location.country(),
        "history": [],
        "errors": []
      })
      jest.advanceTimersByTime((initialMessage.length * 1000) * initialMessage.length - 1);
    });

    act(() => dispatchStreaming([{
      "type": "text",
      "text": faker.lorem.text(),
      "sequence": 1,
      "id": recordId
    }, {
      "type": "special",
      "special": SPECIAL_SUPPORT_TICKET,
      "sequence": 1,
      "id": recordId
    }, {
      "type": "text",
      "text": faker.lorem.text(),
      "sequence": 1,
      "id": recordId
    }]));

    const linkQuiz = root.container.querySelector('[data-e2e="quiz-trigger-btn"]');
    const userFormElement = root.container.querySelector('[data-e2e="user-form"]');
    const emailFormElement = root.container.querySelector('[data-e2e="email-form"]');

    // Assert
    expect(linkQuiz).toBeInTheDocument();
    expect(userFormElement).not.toBeInTheDocument();
    expect(emailFormElement).not.toBeInTheDocument();
  });

  test(`should not show cta component when there is configured purpose ${SUPPORT_PURPOSE}`, async () => {
    // Arrange
    const recordId = uuidV4();
    act(() => {
      root = renderWithProviders(
        <div id="chatbot-container">
          <AppBase config={getInitialConfig({ id: uuidV4(), purpose: SUPPORT_PURPOSE, close: { visible: true } })} />
        </div>
      );
      root.store.dispatch(setConnected(true));
    });

    // Act
    act(() => {
      serverSocket.emit(Events.chatHistory, {
        "region": faker.location.country(),
        "history": [],
        "errors": []
      })
      jest.advanceTimersByTime((initialMessage.length * 1000) * initialMessage.length - 1);
    });

    act(() => {
      root.store.dispatch(setLink(faker.internet.url()));
    });

    act(() => {
      dispatchStreaming([{
        "type": "text",
        "text": faker.lorem.text(),
        "sequence": 1,
        "id": recordId
      }, {
        "type": "text",
        "text": faker.lorem.text(),
        "sequence": 1,
        "id": recordId
      }]);
    });

    const linkQuiz = root.container.querySelector('[data-e2e="quiz-trigger-btn"]');
    const userFormElement = root.container.querySelector('[data-e2e="user-form"]');
    const emailFormElement = root.container.querySelector('[data-e2e="email-form"]');

    // Assert
    expect(linkQuiz).not.toBeInTheDocument();
    expect(userFormElement).toBeInTheDocument();
    expect(emailFormElement).not.toBeInTheDocument();
  });

  test('should show cta component when there is no configured purpose', async () => {
    // Arrange
    const recordId = uuidV4();
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
      serverSocket.emit(Events.chatHistory, {
        "region": faker.location.country(),
        "history": [],
        "errors": []
      })
      jest.advanceTimersByTime((initialMessage.length * 1000) * initialMessage.length - 1);
    });

    act(() => {
      root.store.dispatch(setLink(faker.internet.url()));
    });

    act(() => {
      dispatchStreaming([{
        "type": "text",
        "text": faker.lorem.text(),
        "sequence": 1,
        "id": recordId
      }, {
        "type": "text",
        "text": faker.lorem.text(),
        "sequence": 1,
        "id": recordId
      }]);
    });
    const linkQuiz = root.container.querySelector('[data-e2e="quiz-trigger-btn"]');
    const userFormElement = root.container.querySelector('[data-e2e="user-form"]');
    const emailFormElement = root.container.querySelector('[data-e2e="email-form"]');

    // Assert
    expect(linkQuiz).toBeInTheDocument();
    expect(userFormElement).not.toBeInTheDocument();
    expect(emailFormElement).not.toBeInTheDocument();
  });
});
