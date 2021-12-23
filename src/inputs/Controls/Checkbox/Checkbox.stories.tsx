import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { Checkbox } from './Checkbox';
import { colorSelect } from 'storybook-helpers/presets';

export default {
  title: 'inputs/Checkbox',
  component: Checkbox,
  args: {
    labelText: 'My Checkboxes',
  },
  argTypes: {
    color: colorSelect,
  },
} as Meta;

export const Default: Story = ({ children, ...args }) => (
  <div>
    <Checkbox {...args} />
    <Checkbox checked {...args} />
  </div>
);

export const Disabled: Story = ({ children, ...args }) => (
  <div>
    <Checkbox disabled {...args} />
    <Checkbox checked disabled {...args} />
  </div>
);

export const Error: Story = ({ children, ...args }) => (
  <div>
    <Checkbox error {...args} />
    <Checkbox checked error {...args} />
    <Checkbox error disabled {...args} />
  </div>
);
