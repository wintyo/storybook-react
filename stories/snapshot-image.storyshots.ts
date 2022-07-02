import path from 'path';
import initStoryshots from '@storybook/addon-storyshots';
import { imageSnapshot } from '@storybook/addon-storyshots-puppeteer';

const isStatic = process.env.STORYBOOK === 'static';

initStoryshots({
  test: imageSnapshot({
    storybookUrl: isStatic
      ? `file:${path.resolve(__dirname, '../storybook-static')}`
      : 'http://localhost:6006/',
  }),
});
