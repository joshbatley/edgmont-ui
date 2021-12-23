import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';

import { SaveIcon } from 'atoms/Icons/Outline';
import { OutlineButton } from '../OutlineButton';
import { colorSelectWithWhite, sizeSelect } from 'storybook-helpers/presets';

export default {
  title: 'inputs/Button/Outline',
  component: OutlineButton,
  args: {
    children: 'Get started',
  },
  argTypes: {
    size: sizeSelect,
    color: colorSelectWithWhite,
  },
} as Meta;

export const Default: Story = ({ children, ...args }) => <OutlineButton {...args}>{children}</OutlineButton>;

export const Sizes: Story = ({ children, ...args }) => (
  <div className="space-x-4">
    <OutlineButton size="large" {...args}>{children}</OutlineButton>
    <OutlineButton size="medium" {...args}>{children}</OutlineButton>
    <OutlineButton size="small" {...args}>{children}</OutlineButton>
  </div>
);

export const Loading: Story = ({ children, ...args }) => (
  <OutlineButton isLoading {...args}>
    <span>Saving</span>
  </OutlineButton>
);

export const WithIcon: Story = ({ children, ...args }) => (
  <OutlineButton {...args}>
    <SaveIcon width={16} height={16} /><span>{children}</span>
  </OutlineButton>
);
