import type { Config } from '@jest/types';
import baseConfig from './jest.config';

const config: Config.InitialOptions = {
  ...baseConfig,
  testMatch: ['**/snapshot.storyshots.ts'],
};

export default config;
