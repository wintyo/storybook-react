import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  verbose: true,
  rootDir: './',
  moduleNameMapper: {
    '\\.(mdx)$': '@storybook/addon-docs/jest-transform-mdx',
    '\\.(css|styl|sass|scss)$': 'jest-transform-stub',
  },
  transform: {
    '^.+\\.(js)': 'babel-jest',
    '^.+\\.(ts|tsx)': 'ts-jest',
  },
  testMatch: ['**/*.test.[jt]s'],
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',
    },
  },
  testEnvironment: 'jsdom',
};

export default config;
