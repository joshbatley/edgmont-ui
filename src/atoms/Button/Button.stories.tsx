import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { PrimaryButton } from './PrimaryButton';
import { SaveIcon } from '@heroicons/react/outline';

export default {
  title: 'Atoms/Button/Primary',
  component: PrimaryButton,
  args: {
    children: 'Save',
    color: 'gray',
  },
  argTypes: {
    color: {
      options: ['gray', 'green', 'red', 'yellow', 'blue', 'purple', 'teal', 'pink', 'white'],
      control: { type: 'select' },
    },
  },
} as Meta;

export const Default: Story = ({ children, ...args }) => <PrimaryButton {...args}>{children}</PrimaryButton>;

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
