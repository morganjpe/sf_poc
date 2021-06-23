module.exports = {
  setupFilesAfterEnv: ['./jest.setup.js'],
  modulePathIgnorePatterns: ['node_modules', '.next'],
  testEnvironment: 'jsdom',
};
