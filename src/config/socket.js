export const config = {
  transports: ['websocket'],
  upgrade: false,
  pingInterval: 1000 * 60 * 5,
  pingTimeout: 1000 * 60 * 3,
  secure: true,
  reconnect: true,
};

export const events = {
  chat: 'chat',
  chatHistory: 'chat-history',
  connect: 'connect',
  disconnect: 'disconnect',
  streamStart: 'stream-start',
  streamData: 'stream-data',
  streamEnd: 'stream-end',
  streamError: 'stream-error',
};
