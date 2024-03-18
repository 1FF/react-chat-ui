/* eslint-env jest */
import { serverSocket, cleanup } from 'socket.io-client';
import { Events } from '../src/config';

export function dispatchStreaming(chunks) {
  serverSocket.emit(Events.streamStart, { "id": "4216d0a8-2621-499c-8a65-70191e31ee5a" });
  chunks.forEach(chunk => serverSocket.emit(Events.streamData, chunk));
  serverSocket.emit(Events.streamEnd, { "id": "4216d0a8-2621-499c-8a65-70191e31ee5a" });
}

export function localTearDown() {
  cleanup();
}
