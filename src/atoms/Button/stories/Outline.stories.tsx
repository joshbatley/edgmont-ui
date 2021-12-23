import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';

import { SaveIcon } from '../../Icons/Outline';
import { OutlineButton } from '../OutlineButton';

export default {
  title: 'Atoms/Controls/Button/Outline',
  component: OutlineButton,
  args: {
    children: 'Get started',
    color: 'gray',
  },
  argTypes: {
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'select' },
    },
    color: {
      options: ['gray', 'green', 'red', 'yellow', 'blue', 'purple', 'teal', 'pink', 'white'],
      control: { type: 'select' },
    },
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
