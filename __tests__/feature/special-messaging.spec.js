/* eslint-env jest */
import { act } from 'react-dom/test-utils';

import { serverSocket } from '../../__mocks__/socket.io-client';
import AppBase from '../../src/components/AppBase';
import { chat as getInitialConfig, Events, initialMessage } from '../../src/config';
import { SPECIAL_MERCHANT, SPECIAL_SUPPORT_TICKET, SUPPORT_PURPOSE } from '../../src/config/env';
import { setLink } from '../../src/store/slices/intentions';
import { uuidV4 } from '../../src/utils';
import renderWithProviders from '../../src/utils/storeMockWrapper';
import { dispatchStreaming, localTearDown } from '../helpers';

jest.useFakeTimers();

let root;
describe('Special messages are hidden and elements depending on them are visualized accordingly', () => {
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

  test(`should arrange items accordingly when special key is ${SPECIAL_MERCHANT}`, async () => {
    // Arrange
    const recordId = uuidV4();
    act(() => {
      root = renderWithProviders(
        <div id="chatbot-container">
          <AppBase config={getInitialConfig({ id: uuidV4(), purpose: SUPPORT_PURPOSE, close: { visible: true } })} />
        </div>
      );
    });

    // Act
    act(() => {
      serverSocket.emit(Events.chatHistory, {
        'region': faker.location.country(),
        'history': [],
        'errors': [],
        term
      })
      jest.advanceTimersByTime((initialMessage.length * 1000) * initialMessage.length - 1);
    });

    act(() => dispatchStreaming([{
      'type': 'text',
      'text': faker.lorem.text(),
      'sequence': 1,
      'id': recordId,
      term
    }, {
      'type': 'special',
      'special': SPECIAL_MERCHANT,
      'sequence': 1,
      'id': recordId,
      term
    }, {
      'type': 'text',
      'text': faker.lorem.text(),
      'sequence': 1,
      'id': recordId,
      term
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
    });

    // Act
    act(() => {
      serverSocket.emit(Events.chatHistory, {
        'region': faker.location.country(),
        'history': [],
        'errors': [],
        term
      })
      jest.advanceTimersByTime((initialMessage.length * 1000) * initialMessage.length - 1);
    });

    act(() => dispatchStreaming([{
      'type': 'text',
      'text': faker.lorem.text(),
      'sequence': 1,
      'id': recordId,
      term
    }, {
      'type': 'special',
      'special': SPECIAL_SUPPORT_TICKET,
      'sequence': 1,
      'id': recordId,
      term
    }, {
      'type': 'text',
      'text': faker.lorem.text(),
      'sequence': 1,
      'id': recordId,
      term
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
    });

    // Act
    act(() => {
      serverSocket.emit(Events.chatHistory, {
        'region': faker.location.country(),
        'history': [],
        'errors': [],
        term
      })
      jest.advanceTimersByTime((initialMessage.length * 1000) * initialMessage.length - 1);
    });

    act(() => {
      root.store.dispatch(setLink(faker.internet.url()));
    });

    act(() => {
      dispatchStreaming([{
        'type': 'text',
        'text': faker.lorem.text(),
        'sequence': 1,
        'id': recordId,
        term
      }, {
        'type': 'text',
        'text': faker.lorem.text(),
        'sequence': 1,
        'id': recordId,
        term
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
    });

    // Act
    act(() => {
      serverSocket.emit(Events.chatHistory, {
        'region': faker.location.country(),
        'history': [],
        'errors': [],
        term
      })
      jest.advanceTimersByTime((initialMessage.length * 1000) * initialMessage.length - 1);
    });

    act(() => {
      root.store.dispatch(setLink(faker.internet.url()));
    });

    act(() => {
      dispatchStreaming([{
        'type': 'text',
        'text': faker.lorem.text(),
        'sequence': 1,
        'id': recordId,
        term
      }, {
        'type': 'text',
        'text': faker.lorem.text(),
        'sequence': 1,
        'id': recordId,
        term
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
