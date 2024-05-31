import React from 'react';
import { StoryObj } from '@storybook/react';
import { Box, Switch } from '@edgmont-ui/react';

export default {
  title: 'Inputs/Switch',
  component: Switch,
  args: {
    disabled: false,
  },
};

export const Example: StoryObj<typeof Switch> = {
  render: ({ ...rest }) => <Switch {...rest} />,
};

export const Disabled: StoryObj<typeof Switch> = {
  argTypes: {
    disabled: { table: { disable: true } },
  },
  render: ({ disabled, ...rest }) => (
    <Box spaceXBetween="2">
      <Box spaceXBetween="2">
        <Switch disabled {...rest} />
        <Switch disabled {...rest} />
      </Box>
      <Box spaceXBetween="2">
        <Switch disabled checked {...rest} />
        <Switch disabled checked {...rest} />
      </Box>
    </Box>
  ),
};
