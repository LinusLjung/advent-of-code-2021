/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testPathIgnorePatterns: ['/node_modules/', '/build/'],
  // moduleDirectories: ['node_modules', 'src', '../shared'],
  moduleNameMapper: {
    'shared/(.*)': '<rootDir>/../shared/$1',
  },
};
