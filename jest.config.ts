import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  verbose: true,
  moduleNameMapper: {
    '\\.(mdx)$': 'jest-transform-stub',
    '\\.(css|styl|sass|scss)$': 'jest-transform-stub',
  },
  transform: {
    '^.+\\.(ts|tsx)': 'ts-jest',
  },
  testMatch: ['**/*.test.[jt]s'],
  preset: 'ts-jest/presets/js-with-ts',
  globals: {
    'ts-jest': {
      useESM: true,
      tsconfig: 'tsconfig.json',
    },
  },
  testEnvironment: 'jsdom',
};

export default config;
