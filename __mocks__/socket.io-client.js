import { Events } from '../src/config';

/* eslint-env jest */
let EVENTS = {};
function emit(event, ...args) {

  // to catch the events being sent to the server chat events
  if (event === Events.chat) {
    // mock server acknowledgment
    args[1]();
  }

  // to catch the events being sent to the server chat-history request
  if (args[0]?.user_id) {
    return;
  }

  if (EVENTS[event]?.length) {
    EVENTS[event].forEach((func) => func(...args));
  }
}

export const socket = {
  connected: true,
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
