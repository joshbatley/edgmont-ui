import React from 'react';
import { StoryObj } from '@storybook/react';
import { Box } from '@edgmont-ui/react';
import { Checkbox } from '@edgmont-ui/react';
import { colorSelect } from './presets';

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
};

export const Example: StoryObj<typeof Checkbox> = {
  render: ({ children, ...rest }) => (
    <Box spaceYBetween="3">
      <Checkbox {...rest} />
      <Checkbox checked {...rest} />
    </Box>
  ),
};

export const Disabled: StoryObj<typeof Checkbox> = {
  argTypes: {
    disabled: { table: { disable: true } },
  },
  render: ({ children, disabled, ...rest }) => (
    <Box spaceYBetween="3">
      <Checkbox disabled {...rest} />
      <Checkbox checked disabled {...rest} />
    </Box>
  ),
};

export const ErrorStory: StoryObj<typeof Checkbox> = {
  render: ({ children, ...rest }) => (
    <Box spaceYBetween="3">
      <Checkbox error {...rest} />
      <Checkbox checked error {...rest} />
      <Checkbox error disabled {...rest} />
    </Box>
  ),
};
