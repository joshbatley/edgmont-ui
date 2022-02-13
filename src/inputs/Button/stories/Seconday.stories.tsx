import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { colorSelectWithWhite, sizeSelect } from 'storybook-helpers/presets';
import { SaveIcon } from 'feedback/Icons/Outline';
import { SecondaryButton } from '../SecondaryButton';

export default {
  title: 'Inputs/Button/Secondary',
  component: SecondaryButton,
  args: {
    children: 'Get started',
  },
  argTypes: {
    size: sizeSelect,
    color: colorSelectWithWhite,
  },
} as Meta;

export const Default: Story = ({ children, ...rest }) => <SecondaryButton {...rest}>{children}</SecondaryButton>;

export const Sizes: Story = ({ children, ...rest }) => (
  <div className="space-x-4">
    <SecondaryButton size="large" {...rest}>{children}</SecondaryButton>
    <SecondaryButton size="medium" {...rest}>{children}</SecondaryButton>
    <SecondaryButton size="small" {...rest}>{children}</SecondaryButton>
  </div>
);

export const All: Story = ({ children = 'save' }) => (
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

export const Loading: Story = ({ children, ...rest }) => (
  <SecondaryButton isLoading {...rest}>
    <span>Saving</span>
  </SecondaryButton>
);

export const WithIcon: Story = ({ children, ...rest }) => (
  <SecondaryButton {...rest}>
    <SaveIcon width={16} height={16} /><span>{children}</span>
  </SecondaryButton>
);
