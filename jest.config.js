export default {
  testEnvironment: 'jsdom',
  testMatch: ['**/__tests__/**/*.js', '**/?(*.)+(spec|test).(js|jsx)'],
  clearMocks: true,
  resetMocks: true,
  resetModules: true,
  restoreMocks: true,
  moduleFileExtensions: ['js', 'jsx', 'json', 'node', 'ts', 'tsx'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  testPathIgnorePatterns: ['/node_modules/', '/build/', '<rootDir>/__tests__/setupTests.js'],
  setupFilesAfterEnv: ['<rootDir>/__tests__/setupTests.js'],
  moduleNameMapper: {
    '\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js',
  },
  workerIdleMemoryLimit: '512MB',
  coverageProvider: 'v8',
};
