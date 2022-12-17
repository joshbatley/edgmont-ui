import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { colorSelect, sizeSelect } from 'storybook-helpers/presets';
import { Switch } from '.';

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
  <div className="space-x-2">
    <Switch size="medium" {...rest} /><Switch size="small" {...rest} />
  </div>
);
Sizes.argTypes = {
  size: { table: { disable: true } },
};

export const Colors: Story = ({ ...rest }) => (
  <div className="space-x-2">
    {colorSelect.options.map((c) => (
      <Switch key={c} color={c} checked {...rest} />
    ))}
  </div>
);
Colors.argTypes = {
  color: { table: { disable: true } },
};

export const Disabled: Story = ({ disabled, ...rest }) => (
  <div className="space-y-2">
    <div className="space-x-2">
      <Switch disabled size="medium" {...rest} />
      <Switch disabled size="small" {...rest} />
    </div>
    <div className="space-x-2">
      <Switch disabled checked size="medium" {...rest} />
      <Switch disabled checked size="small" {...rest} />
    </div>
  </div>
);
Disabled.argTypes = {
  disabled: { table: { disable: true } },
};
