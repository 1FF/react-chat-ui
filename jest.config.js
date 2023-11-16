export default {
  testEnvironment: 'jsdom',
  testMatch: ['**/__tests__/**/*.js', '**/?(*.)+(spec|test).(js|jsx)'],
  moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  testPathIgnorePatterns: ['/node_modules/', '/build/', '<rootDir>/__tests__/setupTests.js'],
  setupFilesAfterEnv: ['<rootDir>/__tests__/setupTests.js'],
  moduleNameMapper: {
    '\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js',
    '^@/(.*)$': '<rootDir>/src/$1',
  },
};
