/**
 * Jest configuration for a Vite + React (ESM) project.
 * Use CommonJS here because package.json sets type: "module".
 */
module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.cjs'],
  moduleNameMapper: {
    // Mock styles and CSS modules
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    // Mock static assets (images, svgs, etc.)
    '\\.(png|jpg|jpeg|gif|webp|svg)$': '<rootDir>/__mocks__/fileMock.js',
    // Support older tests importing extend-expect path
    '^@testing-library/jest-dom/extend-expect$': '@testing-library/jest-dom',
  },
  transform: {
    '^.+\\.[tj]sx?$': ['babel-jest', { rootMode: 'upward' }],
  },
  extensionsToTreatAsEsm: ['.jsx', '.ts', '.tsx'],
  testMatch: ['**/?(*.)+(test).[jt]s?(x)'],
  moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
};


