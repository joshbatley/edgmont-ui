import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { colorSelect } from 'storybook-helpers/presets';
import { Switch } from '.';

export default {
  title: 'Inputs/Switch',
  component: Switch,
  argTypes: {
    color: colorSelect,
  },
} as Meta;

export const Default: Story = ({ ...rest }) => <Switch {...rest} />;

export const Sizes: Story = ({ ...rest }) =>
  <div className="space-x-2">
    <Switch size="medium" {...rest} /><Switch size="small" {...rest} />
  </div>;

export const Colors: Story = ({ ...rest }) =>
  <div className="space-x-2">
    {colorSelect.options.map((c) => (
      <Switch key={c} color={c} checked />
    ))}
  </div>;

export const Disabled: Story = ({ ...rest }) =>
  <div className="space-y-2">
    <div className="space-x-2">
      <Switch disabled size="medium" {...rest} />
      <Switch disabled size="small" {...rest} />
    </div>
    <div className="space-x-2">
      <Switch disabled checked size="medium" {...rest} />
      <Switch disabled checked size="small" {...rest} />
    </div>
  </div>;
