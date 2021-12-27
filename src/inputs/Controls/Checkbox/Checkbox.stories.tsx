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

export const Default: Story = ({ children, ...rest }) => (
  <div>
    <Checkbox {...rest} />
    <Checkbox checked {...rest} />
  </div>
);

export const Disabled: Story = ({ children, ...rest }) => (
  <div>
    <Checkbox disabled {...rest} />
    <Checkbox checked disabled {...rest} />
  </div>
);

export const Error: Story = ({ children, ...rest }) => (
  <div>
    <Checkbox error {...rest} />
    <Checkbox checked error {...rest} />
    <Checkbox error disabled {...rest} />
  </div>
);
