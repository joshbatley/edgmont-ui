import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';

import { SaveIcon } from 'atoms/Icons/Outline';
import { PrimaryButton } from '../PrimaryButton';
import { colorSelectWithWhite, sizeSelect } from 'storybook-helpers/presets';

export default {
  title: 'inputs/Button/Primary',
  component: PrimaryButton,
  args: {
    children: 'Get started',
  },
  argTypes: {
    size: sizeSelect,
    color: colorSelectWithWhite,
  },
} as Meta;

export const Default: Story = ({ children, ...args }) => <PrimaryButton {...args}>{children}</PrimaryButton>;

export const Sizes: Story = ({ children, ...args }) => (
  <div className="space-x-4">
    <PrimaryButton size="large" {...args}>{children}</PrimaryButton>
    <PrimaryButton size="medium" {...args}>{children}</PrimaryButton>
    <PrimaryButton size="small" {...args}>{children}</PrimaryButton>
  </div>
);

export const All: Story = ({ children = 'save', ...args }) => (
  <div className="grid grid-cols-6 gap-4">
    <PrimaryButton color="gray">{children}</PrimaryButton>
    <PrimaryButton color="green">{children}</PrimaryButton>
    <PrimaryButton color="red">{children}</PrimaryButton>
    <PrimaryButton color="yellow">{children}</PrimaryButton>
    <PrimaryButton color="blue">{children}</PrimaryButton>
    <PrimaryButton color="purple">{children}</PrimaryButton>
    <PrimaryButton color="teal">{children}</PrimaryButton>
    <PrimaryButton color="pink">{children}</PrimaryButton>
    <PrimaryButton color="white">{children}</PrimaryButton>
  </div>);

export const Loading: Story = ({ children, ...args }) => (
  <PrimaryButton isLoading {...args}>
    <span>Saving</span>
  </PrimaryButton>
);

export const WithIcon: Story = ({ children, ...args }) => (
  <PrimaryButton {...args}>
    <SaveIcon width={16} height={16} /><span>{children}</span>
  </PrimaryButton>
);

export const WithAction: Story = ({ children, ...args }) => (
  <PrimaryButton onClick={() => alert('boo')} {...args}>
    {children}
  </PrimaryButton>
);
