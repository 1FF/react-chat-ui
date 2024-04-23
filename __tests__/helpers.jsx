/* eslint-env jest */
import { cleanup,serverSocket } from 'socket.io-client';

import { Events } from '../src/config';

export function dispatchStreaming(chunks) {
  serverSocket.emit(Events.streamStart, { ...chunks[0] });
  chunks.forEach((chunk) => serverSocket.emit(Events.streamData, chunk));
  serverSocket.emit(Events.streamEnd, { ...chunks[0] });
}

export function localTearDown() {
  cleanup();
}
