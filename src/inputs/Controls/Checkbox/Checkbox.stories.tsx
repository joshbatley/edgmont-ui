import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { colorSelect } from 'storybook-helpers/presets';
import { Checkbox } from '.';

export default {
  title: 'Inputs/Checkbox',
  component: Checkbox,
  args: {
    labelText: 'My Checkboxes',
    disabled: false,
  },
  argTypes: {
    color: colorSelect,
  },
} as Meta;

export const Example: Story = ({ children, ...rest }) => (
  <div>
    <Checkbox {...rest} />
    <Checkbox checked {...rest} />
  </div>
);

export const Disabled: Story = ({ children, disabled, ...rest }) => (
  <div>
    <Checkbox disabled {...rest} />
    <Checkbox checked disabled {...rest} />
  </div>
);
Disabled.argTypes = {
  disabled: { table: { disable: true } },
};

export const Error: Story = ({ children, ...rest }) => (
  <div>
    <Checkbox error {...rest} />
    <Checkbox checked error {...rest} />
    <Checkbox error disabled {...rest} />
  </div>
);
