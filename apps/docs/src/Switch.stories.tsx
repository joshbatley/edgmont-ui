import React from 'react';
import { StoryObj } from '@storybook/react';
import { Box, Switch } from '@edgmont-ui/react';
import { colorSelect, sizeSelect } from './presets';

export default {
  title: 'Inputs/Switch',
  component: Switch,
  args: {
    disabled: false,
  },
  argTypes: {
    color: colorSelect,
    size: sizeSelect,
  },
};

export const Example: StoryObj<typeof Switch> = {
  render: ({ ...rest }) => <Switch {...rest} />,
};

export const Sizes: StoryObj<typeof Switch> = {
  argTypes: {
    size: { table: { disable: true } },
  },
  render: ({ size, ...rest }) => (
    <Box spaceXBetween="2">
      <Switch size="medium" {...rest} />
      <Switch size="small" {...rest} />
    </Box>
  ),
};

export const Colors: StoryObj<typeof Switch> = {
  argTypes: {
    color: { table: { disable: true } },
  },
  render: ({ ...rest }) => (
    <Box spaceXBetween="2">
      <Switch checked {...rest} />
      <Switch error checked {...rest} />
    </Box>
  ),
};

export const Disabled: StoryObj<typeof Switch> = {
  argTypes: {
    disabled: { table: { disable: true } },
  },
  render: ({ disabled, ...rest }) => (
    <Box spaceXBetween="2">
      <Box spaceXBetween="2">
        <Switch disabled size="medium" {...rest} />
        <Switch disabled size="small" {...rest} />
      </Box>
      <Box spaceXBetween="2">
        <Switch disabled checked size="medium" {...rest} />
        <Switch disabled checked size="small" {...rest} />
      </Box>
    </Box>
  ),
};
