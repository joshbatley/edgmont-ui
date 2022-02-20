import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { sizeSelect } from 'storybook-helpers/presets';
import { SaveIcon } from 'icons/Outline';
import { OutlineButton } from '../OutlineButton';

export default {
  title: 'Inputs/Buttons/Outline',
  component: OutlineButton,
  args: {
    children: 'Get started',
  },
  argTypes: {
    size: sizeSelect,
  },
} as Meta;

export const Example: Story = ({ children, ...rest }) => <OutlineButton {...rest}>{children}</OutlineButton>;

export const Sizes: Story = ({ children, ...rest }) => (
  <div className="space-x-4">
    <OutlineButton size="large" {...rest}>{children}</OutlineButton>
    <OutlineButton size="medium" {...rest}>{children}</OutlineButton>
    <OutlineButton size="small" {...rest}>{children}</OutlineButton>
  </div>
);
Sizes.argTypes = {
  size: {
    table: {
      disable: true,
    },
  },
};

export const Loading: Story = ({ children, ...rest }) => (
  <OutlineButton isLoading {...rest}>
    <span>Saving</span>
  </OutlineButton>
);

export const WithIcon: Story = ({ children, ...rest }) => (
  <OutlineButton {...rest}>
    <SaveIcon width={16} height={16} /><span>{children}</span>
  </OutlineButton>
);
