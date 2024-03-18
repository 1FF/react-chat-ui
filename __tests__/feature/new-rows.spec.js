/* eslint-env jest */
import { act } from 'react-dom/test-utils';

import { uuidV4 } from '../../src/utils';
import { localTearDown } from '../helpers';
import AppBase from '../../src/components/AppBase';
import renderWithProviders from '../../src/utils/storeMockWrapper';
import { setConnected } from '../../src/store/slices/chat';
import { serverSocket } from '../../__mocks__/socket.io-client';
import { Events, Roles, chat as getInitialConfig, initialMessage } from '../../src/config';
import { replaceNewRowSymbols } from '../../src/utils/formatting';

const textProbeWithTwoRows = (separator = '\n') => ({ 'type': 'text', 'text': `${faker.lorem.word()}${separator}${faker.lorem.word()}`, 'sequence': 2 });

const serverData = {
  "region": faker.location.country(),
  "history": [],
  "errors": [],
}

jest.useFakeTimers();

let root;
describe('Having special symbols \n \r or <br> makes separates items into new rows', () => {
  beforeEach(() => {
    serverData.history = [];
    serverData.errors = [];
    serverData.region = faker.location.country();
  });

  afterEach(localTearDown);

  test('having \n returns multiple elements in last message', async () => {
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
      content: [textProbeWithTwoRows()],
    }];

    // Act
    act(() => {
      serverSocket.emit(Events.chatHistory, serverData);
      jest.advanceTimersByTime((initialMessage.length * 1000) * initialMessage.length - 1);
    });

    // Assert
    expect(root.container.querySelector('[data-e2e="assistant-text"] span').children.length)
      .toBe(1);
  });

  test('having \r\n returns multiple elements in last message', async () => {
    const separator = '\r\n';
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
      content: [textProbeWithTwoRows(separator)],
    }];

    // Act
    act(() => {
      serverSocket.emit(Events.chatHistory, serverData);
      jest.advanceTimersByTime((initialMessage.length * 1000) * initialMessage.length - 1);
    });

    // Assert
    expect(root.container.querySelector('[data-e2e="assistant-text"] span').children.length)
      .toBe(1);
  });

  test('having <br> returns multiple elements in last message', async () => {
    const separator = '<br>';
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
      content: [textProbeWithTwoRows(separator)],
    }];

    // Act
    act(() => {
      serverSocket.emit(Events.chatHistory, serverData);
      jest.advanceTimersByTime((initialMessage.length * 1000) * initialMessage.length - 1);
    });

    // Assert
    expect(root.container.querySelector('[data-e2e="assistant-text"] span').children.length)
      .toBe(1);
  });


  test('having <br/> returns multiple elements in last message', async () => {
    const separator = '<br/>';
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
      content: [textProbeWithTwoRows(separator)],
    }];

    // Act
    act(() => {
      serverSocket.emit(Events.chatHistory, serverData);
      jest.advanceTimersByTime((initialMessage.length * 1000) * initialMessage.length - 1);
    });

    // Assert
    expect(root.container.querySelector('[data-e2e="assistant-text"] span').children.length)
      .toBe(1);
  });

  test('having \\r\\n returns multiple elements in last message', async () => {
    const separator = '\\r\\n';
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
      content: [textProbeWithTwoRows(separator)],
    }];

    // Act
    act(() => {
      serverSocket.emit(Events.chatHistory, serverData);
      jest.advanceTimersByTime((initialMessage.length * 1000) * initialMessage.length - 1);
    });

    // Assert
    expect(root.container.querySelector('[data-e2e="assistant-text"] span').children.length)
      .toBe(1);
  });

  test('no separator returns single element in last message', async () => {
    const separator = '';
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
      content: [textProbeWithTwoRows(separator)],
    }];

    // Act
    act(() => {
      serverSocket.emit(Events.chatHistory, serverData);
      jest.advanceTimersByTime((initialMessage.length * 1000) * initialMessage.length - 1);
    });

    // Assert
    expect(root.container.querySelector('[data-e2e="assistant-text"] span').children.length)
      .toBe(1);
  });
});


describe('replaceNewRowSymbols', () => {
  test('it replaces <br>', () => {
    // Arrange
    // Act
    const result = replaceNewRowSymbols('text <br> text')
    // Assert
    expect(result).toContain('\n')
  });

  test('it replaces \\r\\n', () => {
    // Arrange
    // Act
    const result = replaceNewRowSymbols('text \\r\\n text')
    // Assert
    expect(result).toContain('\n')
  });

  test('it replaces <br/>', () => {
    // Arrange
    // Act
    const result = replaceNewRowSymbols('text <br/> text')
    // Assert
    expect(result).toContain('\n')
  });

  test('it replaces <br/>', () => {
    // Arrange
    // Act
    const result = replaceNewRowSymbols('text \r\n text')
    // Assert
    expect(result).toContain('\n')
  });

  test('it does not replace when there isn\'n any symbols', () => {
    // Arrange
    // Act
    const result = replaceNewRowSymbols('text \ text')
    // Assert
    expect(result).not.toContain('\n')
  });
});
