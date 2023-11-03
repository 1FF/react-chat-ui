export const config = {
  transports: ['websocket'],
  upgrade: false,
  pingInterval: 1000 * 60 * 5,
  pingTimeout: 1000 * 60 * 3,
  secure: true,
  reconnect: true,
};

// DEV Note: TS Enum
export const events = {
  chat: 'chat',
  chatHistory: 'chat-history',
  connect: 'connect',
  error: 'error',
  disconnect: 'disconnect',
  streamStart: 'stream-start',
  streamData: 'stream-data',
  streamEnd: 'stream-end',
  streamError: 'stream-error',
};

export default { config, events };
