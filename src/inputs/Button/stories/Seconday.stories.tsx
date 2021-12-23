import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';

import { SaveIcon } from 'atoms/Icons/Outline';
import { SecondaryButton } from '../SecondaryButton';
import { colorSelectWithWhite, sizeSelect } from 'storybook-helpers/presets';

export default {
  title: 'inputs/Button/Secondary',
  component: SecondaryButton,
  args: {
    children: 'Get started',
  },
  argTypes: {
    size: sizeSelect,
    color: colorSelectWithWhite,
  },
} as Meta;

export const Default: Story = ({ children, ...args }) => <SecondaryButton {...args}>{children}</SecondaryButton>;

export const Sizes: Story = ({ children, ...args }) => (
  <div className="space-x-4">
    <SecondaryButton size="large" {...args}>{children}</SecondaryButton>
    <SecondaryButton size="medium" {...args}>{children}</SecondaryButton>
    <SecondaryButton size="small" {...args}>{children}</SecondaryButton>
  </div>
);

export const All: Story = ({ children = 'save', ...args }) => (
  <div className="grid grid-cols-6 gap-4">
    <SecondaryButton color="gray">{children}</SecondaryButton>
    <SecondaryButton color="green">{children}</SecondaryButton>
    <SecondaryButton color="red">{children}</SecondaryButton>
    <SecondaryButton color="yellow">{children}</SecondaryButton>
    <SecondaryButton color="blue">{children}</SecondaryButton>
    <SecondaryButton color="purple">{children}</SecondaryButton>
    <SecondaryButton color="teal">{children}</SecondaryButton>
    <SecondaryButton color="pink">{children}</SecondaryButton>
  </div>);

export const Loading: Story = ({ children, ...args }) => (
  <SecondaryButton isLoading {...args}>
    <span>Saving</span>
  </SecondaryButton>
);

export const WithIcon: Story = ({ children, ...args }) => (
  <SecondaryButton {...args}>
    <SaveIcon width={16} height={16} /><span>{children}</span>
  </SecondaryButton>
);
