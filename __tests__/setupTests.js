/* eslint-env jest */
import '@testing-library/jest-dom';

afterEach(() => {
  jest.clearAllMocks();
  jest.restoreAllMocks();
  localStorage.clear();
});
