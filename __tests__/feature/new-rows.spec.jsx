/* eslint-env jest */
import { act } from 'react-dom/test-utils';

import { serverSocket } from '../../__mocks__/socket.io-client';
import AppBase from '../../src/components/AppBase';
import { chat as getInitialConfig, Events, initialMessage,Roles } from '../../src/config';
import { setConnected } from '../../src/store/slices/chat';
import { uuidV4 } from '../../src/utils';
import { replaceNewRowSymbols } from '../../src/utils/formatting';
import renderWithProviders from '../../src/utils/storeMockWrapper';
import { localTearDown } from '../helpers';

const textProbeWithTwoRows = (separator = '\n') => ({ 'type': 'text', 'text': `${faker.lorem.word()}${separator}${faker.lorem.word()}`, 'sequence': 2 });

const serverData = {
  'region': faker.location.country(),
  'history': [],
  'errors': [],
}

jest.useFakeTimers();

let root;
describe('Having special symbols \n \r or <br> makes separates items into new rows', () => {
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
    serverData.history = [];
    serverData.errors = [];
    serverData.region = faker.location.country();
    serverData.term = term;
  });

  afterEach(localTearDown);

  test('having \n returns multiple elements in last message', async () => {
    act(() => {
      root = renderWithProviders(
        <div id="chatbot-container">
          <AppBase config={getInitialConfig({ id: uuidV4(), purpose: '', close: { visible: true } })} />
        </div>
      );
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
    });

    serverData.history = [{
      id: uuidV4(),
      role: Roles.assistant,
      time: new Date().getTime(),
      content: [textProbeWithTwoRows(separator)],
      term
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
    const result = replaceNewRowSymbols('text <br> text');

    // Assert
    expect(result).toContain('\n')
  });

  test('it replaces \\r\\n', () => {
    // Arrange
    // Act
    const result = replaceNewRowSymbols('text \\r\\n text');

    // Assert
    expect(result).toContain('\n');
  });

  test('it replaces <br/>', () => {
    // Arrange
    // Act
    const result = replaceNewRowSymbols('text <br/> text');

    // Assert
    expect(result).toContain('\n');
  });

  test('it replaces <br/>', () => {
    // Arrange
    // Act
    const result = replaceNewRowSymbols('text \r\n text');

    // Assert
    expect(result).toContain('\n');
  });

  test('it does not replace when there isn\'n any symbols', () => {
    // Arrange
    // Act
    const result = replaceNewRowSymbols('text \ text');

    // Assert
    expect(result).not.toContain('\n');
  });

  test('it does not replace when there isn\'n any symbols', () => {
    // Arrange
    // Act
    const result = replaceNewRowSymbols('text     text');

    // Assert
    expect(result).not.toContain('\n');
  });

  test('it does not replace when there is tab symbols', () => {
    // Arrange
    // Act
    const result = replaceNewRowSymbols('text     text');

    // Assert
    expect(result).not.toContain('\n')
  });

  test('it does replace when there is double <br> symbols', () => {
    // Arrange
    // Act
    const result = replaceNewRowSymbols('hello <br><br> hello')
    const expected = result.match(/\n/g).length;

    // Assert
    expect(expected).toBe(2);
  });

  test('it does not affect adding new rows when having pressed Enter', () => {
    // Arrange
    // Act
    const result = replaceNewRowSymbols(`hello
     hello`);

    // Assert
    expect(result).toContain('\n');
  });
});
