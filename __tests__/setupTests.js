/* eslint-disable no-underscore-dangle */
/* eslint-env jest */
import '@testing-library/jest-dom';

// this is due to implementation errors from the library;
const listeners = window._virtualConsole.listeners('jsdomError');
const originalListener = listeners && listeners[0];
window._virtualConsole.removeAllListeners('jsdomError');
window._virtualConsole.addListener('jsdomError', error => {
  if (
    error.type !== 'not implemented'
    && error.message !== 'Not implemented: navigation (except hash changes)'
    && originalListener
  ) {
    originalListener(error);
  }
});
global.spies = [];

afterEach(() => {
  jest.clearAllMocks();
  jest.restoreAllMocks();
  localStorage.clear();
  global.spies.forEach(spy => spy.mockRestore());
});
