/* eslint-env jest */
import { waitFor } from '@testing-library/react';
import { serverSocket, cleanup } from 'socket.io-client';
import AppBase from '../src/components/AppBase';
import { events } from '../src/config';
import renderWithProviders from '../src/utils/storeMockWrapper';
import { history as defaultHistory, initialConfig, pd } from '../src/chatMocks';
import { intent } from '../src/main';

let root;

export function dispatchSocketChange(history = defaultHistory) {
  serverSocket.emit('connect');
  serverSocket.emit(events.chatHistory, { history, errors: [], region: 'frankfurt' });
}

export function dispatchStreaming(chunks) {
  serverSocket.emit('connect');
  serverSocket.emit(events.streamStart);
  chunks.forEach(chunk => serverSocket.emit(events.streamData, { chunk, messages: [], errors: [] }));
  serverSocket.emit(events.streamEnd);
}

export async function localSetup({ purpose } = { purpose: 'default' }) {
  localStorage.setItem('__pd', JSON.stringify(pd));
  global.spies.push(jest.spyOn(intent.core, 'emit'));
  const intentOnSpy = jest.spyOn(intent.core, 'on');
  global.spies.push(intentOnSpy);
  intentOnSpy.mockReturnValue(() => true);
  await waitFor(() => {
    root = renderWithProviders(<div id="chatbot-container"><AppBase config={ initialConfig({ purpose }) } /></div>);
  });
  return root;
}

export function localTearDown() {
  cleanup();
}
