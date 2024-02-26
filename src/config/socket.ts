export const config = {
  transports: ['websocket'],
  upgrade: false,
  pingInterval: 1000 * 60 * 5,
  pingTimeout: 1000 * 60 * 3,
  secure: true,
  reconnect: true,
};

export default { config };
