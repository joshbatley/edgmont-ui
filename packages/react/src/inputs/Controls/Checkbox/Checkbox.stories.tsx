import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { colorSelect } from '../../../storybook-helpers/presets';
import { Checkbox } from '.';
import { Box } from '../../../data';

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
  <Box spaceYBetween="3">
    <Checkbox {...rest} />
    <Checkbox checked {...rest} />
  </Box>
);

export const Disabled: Story = ({ children, disabled, ...rest }) => (
  <Box spaceYBetween="3">
    <Checkbox disabled {...rest} />
    <Checkbox checked disabled {...rest} />
  </Box>
);
Disabled.argTypes = {
  disabled: { table: { disable: true } },
};

export const Error: Story = ({ children, ...rest }) => (
  <Box spaceYBetween="3">
    <Checkbox error {...rest} />
    <Checkbox checked error {...rest} />
    <Checkbox error disabled {...rest} />
  </Box>
);
