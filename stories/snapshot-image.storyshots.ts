import path from 'path';
import initStoryshots from '@storybook/addon-storyshots';
import { imageSnapshot } from '@storybook/addon-storyshots-puppeteer';

const isStatic = process.env.STORYBOOK === 'static';

initStoryshots({
  test: imageSnapshot({
    storybookUrl: isStatic
      ? `file:${path.resolve(__dirname, '../storybook-static')}`
      : 'http://localhost:6006/',
    getMatchOptions: () => ({
      // CI側のbrowser renderと差が出てしまうので比較的大きめに値を取る
      failureThreshold: 0.5,
      failureThresholdType: 'percent',
    }),
  }),
});
