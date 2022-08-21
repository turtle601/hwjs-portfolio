const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '^@/components/(.*)$': '<rootDir>/components/$1',
    '^@/pages/(.*)$': '<rootDir>/pages/$1',
    '^@/public/(.*)$': '<rootDir>/public/$1',
    '^@/stylesheets/(.*)$': '<rootDir>/lib/stylesheets/$1',
    '^@/hooks/(.*)$': '<rootDir>/lib/hooks/$1',
    '^@/atom/(.*)$': '<rootDir>/atom/$1'
  },

  testEnvironment: 'jest-environment-jsdom',
  
};

module.exports = createJestConfig(customJestConfig);
