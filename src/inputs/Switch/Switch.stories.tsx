import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { Switch } from './';
import { colorSelectWithWhite } from 'storybook-helpers/presets';

export default {
  title: 'inputs/Switch',
  component: Switch,
  argTypes: {
    color: colorSelectWithWhite,
  },
} as Meta;

export const Default: Story = ({ ...args }) => <Switch {...args} />;

export const Sizes: Story = ({ ...args }) =>
  <div className="space-x-2">
    <Switch size="medium" {...args} /><Switch size="small" {...args} />
  </div>;

export const Colors: Story = ({ ...args }) =>
  <div className="space-x-2">
    <Switch color="gray" checked {...args} />
    <Switch color="blue" checked {...args} />
    <Switch color="green" checked {...args} />
    <Switch color="pink" checked {...args} />
    <Switch color="purple" checked {...args} />
    <Switch color="teal" checked {...args} />
    <Switch color="yellow" checked {...args} />
  </div>;

export const Disabled: Story = ({ ...args }) =>
  <div className="space-y-2">
    <div className="space-x-2">
      <Switch disabled size="medium" {...args} />
      <Switch disabled size="small" {...args} />
    </div>
    <div className="space-x-2">
      <Switch disabled checked size="medium" {...args} />
      <Switch disabled checked size="small" {...args} />
    </div>
  </div>;
