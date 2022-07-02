import { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';

import { Counter } from './Counter';

export default {
  title: 'Example/Counter',
  component: Counter,
  args: {
    count: 0,
  },
} as ComponentMeta<typeof Counter>;

const Template: ComponentStory<typeof Counter> = (args) => (
  <Counter {...args} />
);

export const Base = Template.bind({});

const LocalTemplate: ComponentStory<typeof Counter> = (args) => {
  const [count, setCount] = useState<number>(args.count);

  return (
    <Counter
      count={count}
      onChange={(newCount) => {
        setCount(newCount);
      }}
    />
  );
};

export const Local = LocalTemplate.bind({});
Local.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  const elMinusButton = await canvas.getByTestId('minus');
  const elPlusButton = await canvas.getByTestId('plus');

  await userEvent.click(elPlusButton);
  await userEvent.click(elPlusButton);
  await userEvent.click(elPlusButton);
  await userEvent.click(elMinusButton);
};
