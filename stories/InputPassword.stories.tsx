import { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';

import { InputPassword } from './InputPassword';

export default {
  title: 'Example/InputPassword',
  component: InputPassword,
  args: {
    password: 'password',
    isShow: false,
  },
} as ComponentMeta<typeof InputPassword>;

const Template: ComponentStory<typeof InputPassword> = (args) => (
  <InputPassword {...args} />
);

export const Hide = Template.bind({});
Hide.args = {
  isShow: false,
};

export const Show = Template.bind({});
Show.args = {
  isShow: true,
};

const LocalTemplate: ComponentStory<typeof InputPassword> = (args) => {
  const [password, setPassword] = useState<string>(args.password);
  const [isShow, setIsShow] = useState<boolean>(args.isShow);

  return (
    <InputPassword
      password={password}
      isShow={isShow}
      onChangePassword={setPassword}
      onChangeIsShow={setIsShow}
    />
  );
};

export const Local = LocalTemplate.bind({});
Local.args = {
  password: '',
};
Local.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  const elInputPassword = await canvas.getByTestId('input-password');
  const elToggleShowButton = await canvas.getByTestId('toggle-show-button');

  await userEvent.type(elInputPassword, 'password', {
    delay: 100,
  });
  await userEvent.click(elToggleShowButton);
};
