/* eslint-env jest */
import { cleanup, serverSocket } from 'socket.io-client';

import { Events } from '../src/config';
import { Definition } from '../src/config/enums';

export function dispatchStreaming(chunks) {
  serverSocket.emit(Events.streamStart, { ...chunks[0] });
  chunks.forEach((chunk) => serverSocket.emit(Events.streamData, chunk));
  serverSocket.emit(Events.streamEnd, { ...chunks[0] });
}

export function localTearDown() {
  cleanup();
}

export const generateStreamingData = ({ term, recordId, threadId, addons }) => {
  return [
    {
      type: Definition.text,
      text: '',
      sequence: 1,
      id: recordId,
      term,
      threadId,
    },
    {
      type: Definition.text,
      text: ' ticket',
      sequence: 1,
      id: recordId,
      term,
      threadId,
    },
    ...addons,
  ];
};
