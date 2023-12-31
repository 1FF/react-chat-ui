/* eslint-env jest */
let EVENTS = {};
function emit(event, ...args) {
  if (args[0]?.user_id) {
    return;
  }
  EVENTS[event].forEach(func => func(...args));
}

const socket = {
  on(event, func) {
    if (EVENTS[event]) {
      return EVENTS[event].push(func);
    }
    EVENTS[event] = [func];
  },
  emit,
  close: () => jest.fn()
};

export const io = {
  connect() {
    return socket;
  }
};

export const serverSocket = { emit };

export function cleanup() {
  EVENTS = {};
}

export default io;
