import path from 'path';
import initStoryshots from '@storybook/addon-storyshots';
import { imageSnapshot } from '@storybook/addon-storyshots-puppeteer';

const isStatic = process.env.STORYBOOK === 'static';

const storybookUrl = (() => {
  if (isStatic) {
    return `file:${path.resolve(__dirname, '../storybook-static')}`;
  }

  try {
    const url = require('../storybook-url');
    return url;
  } catch {
    return 'http://localhost:6006/';
  }
})();
console.log('access storybook:', storybookUrl);

initStoryshots({
  test: imageSnapshot({
    storybookUrl,
  }),
});
