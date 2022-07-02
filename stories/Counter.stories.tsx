import { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

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
