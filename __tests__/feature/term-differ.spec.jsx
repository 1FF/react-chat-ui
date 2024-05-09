/* eslint-env jest */
import { act } from 'react-dom/test-utils';

import { serverSocket } from '../../__mocks__/socket.io-client';
import AppBase from '../../src/components/AppBase';
import { chat as getInitialConfig, Events, initialMessage,Roles } from '../../src/config';
import initialState from '../../src/store/initialState';
import { uuidV4 } from '../../src/utils';
import renderWithProviders from '../../src/utils/storeMockWrapper';
import { localTearDown } from '../helpers';

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
  'region': faker.location.country(),
  'history': [],
  'errors': [],
}

jest.useFakeTimers();

let root;

describe('Multiple terms are being saved', () => {
  const term = 'default'
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
  })
  afterEach(localTearDown);

  test('on preloaded state with history to save the old one and create new record', async () => {
    const previousTerm = faker.lorem.word();
    // Arrange
    act(() => {
      root = renderWithProviders(
        <div id="chatbot-container">
          <AppBase config={getInitialConfig({ id: uuidV4(), purpose: '', close: { visible: true } })} />
        </div>,
        {
          ...initialState,
          chat: {
            ...initialState.chat,
            record: {
              [previousTerm]: { historyIds: [], historyData: {} }
            }
          }
        }
      );
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

    // Assert
    const { chat } = root.store.getState();
    expect(chat.record[previousTerm].historyIds).toBeDefined();
    expect(chat.record[threadId].historyIds).toBeDefined();
  });
});
