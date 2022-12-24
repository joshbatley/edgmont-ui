import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { colorSelect, sizeSelect } from 'storybook-helpers/presets';
import { Switch } from '.';
import { Box } from 'data';

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
} as Meta;

export const Example: Story = ({ ...rest }) => <Switch {...rest} />;

export const Sizes: Story = ({ size, ...rest }) => (
  <Box spaceXBetween="2">
    <Switch size="medium" {...rest} /><Switch size="small" {...rest} />
  </Box>
);
Sizes.argTypes = {
  size: { table: { disable: true } },
};

export const Colors: Story = ({ ...rest }) => (
  <Box spaceXBetween="2">
    {colorSelect.options.map((c) => (
      <Switch key={c} color={c} checked {...rest} />
    ))}
  </Box>
);
Colors.argTypes = {
  color: { table: { disable: true } },
};

export const Disabled: Story = ({ disabled, ...rest }) => (
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
);
Disabled.argTypes = {
  disabled: { table: { disable: true } },
};
