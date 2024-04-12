/* eslint-env jest */
import { fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

import { uuidV4 } from '../../src/utils';
import { localTearDown } from '../helpers';
import AppBase from '../../src/components/AppBase';
import renderWithProviders from '../../src/utils/storeMockWrapper';
import { setConnected } from '../../src/store/slices/chat';
import { Events, chat as getInitialConfig, initialMessage } from '../../src/config';
import { serverSocket } from '../../__mocks__/socket.io-client';


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
  });
  afterEach(localTearDown);

  test('image and video are visualized in the document', async () => {
    // Arrange
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
    const imageMessage = root.container.querySelector('[data-e2e="assistant-img"]');
    const videoMessage = root.container.querySelector('[data-e2e="assistant-iframe"]');

    // Assert
    expect(imageMessage).toBeInTheDocument();
    expect(videoMessage).toBeInTheDocument();
  });

  test('clicking on the image shows/hides modal and sets state', async () => {
    // Arrange
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
    const imageMessage = root.container.querySelector('[data-e2e="assistant-img"]');
    fireEvent.click(imageMessage);
    const closeButton = root.container.querySelector('[data-e2e="media-modal-close-btn"]');
    const imageInModal = root.container.querySelector('[data-e2e="image-in-modal"]');

    // Assert
    const { config } = root.store.getState();
    expect(closeButton).toBeInTheDocument();
    expect(imageInModal).toBeInTheDocument();
    expect(config.mediaModal.isVisible).toBe(true);
    expect(config.mediaModal.image).toBeDefined();
    expect(config.mediaModal.code).toBe('');

    // Act
    fireEvent.click(closeButton);

    // Assert
    const { config: configAfterClose } = root.store.getState();
    expect(closeButton).not.toBeInTheDocument();
    expect(imageInModal).not.toBeInTheDocument();
    expect(configAfterClose.mediaModal.isVisible).toBe(false);
    expect(configAfterClose.mediaModal.image).toBe('');
    expect(configAfterClose.mediaModal.code).toBe('');
  });

  test('clicking on the video shows/hides modal and sets state', async () => {
    // Arrange
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

    const videoMessage = root.container.querySelector('[data-e2e="assistant-iframe"]');

    fireEvent.click(videoMessage);
    const closeButton = root.container.querySelector('[data-e2e="media-modal-close-btn"]');
    const videoInModal = root.container.querySelector('[data-e2e="video-in-modal"]');

    // Assert
    const { config } = root.store.getState();
    expect(closeButton).toBeInTheDocument();
    expect(videoInModal).toBeInTheDocument();
    expect(config.mediaModal.isVisible).toBe(true);
    expect(config.mediaModal.code).toBeDefined();

    // Act
    fireEvent.click(closeButton);

    // Assert
    const { config: configAfterClose } = root.store.getState();
    expect(closeButton).not.toBeInTheDocument();
    expect(videoInModal).not.toBeInTheDocument();
    expect(configAfterClose.mediaModal.isVisible).toBe(false);
    expect(configAfterClose.mediaModal.code).toBe('');
  });
});
