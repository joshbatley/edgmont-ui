import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { colorSelectWithWhite, sizeSelect } from 'storybook-helpers/presets';
import { SaveIcon } from 'feedback/Icons/Outline';
import { PrimaryButton } from '../PrimaryButton';

export default {
  title: 'Inputs/Button/Primary',
  component: PrimaryButton,
  args: {
    children: 'Get started',
  },
  argTypes: {
    size: sizeSelect,
    color: colorSelectWithWhite,
  },
} as Meta;

export const Default: Story = ({ children, ...rest }) => <PrimaryButton {...rest}>{children}</PrimaryButton>;

export const Sizes: Story = ({ children, ...rest }) => (
  <div className="space-x-4">
    <PrimaryButton size="large" {...rest}>{children}</PrimaryButton>
    <PrimaryButton size="medium" {...rest}>{children}</PrimaryButton>
    <PrimaryButton size="small" {...rest}>{children}</PrimaryButton>
  </div>
);

export const All: Story = ({ children = 'save' }) => (
  <div className="grid grid-cols-6 gap-4">
    <PrimaryButton color="primary">{children}</PrimaryButton>
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

export const Loading: Story = ({ children, ...rest }) => (
  <PrimaryButton isLoading {...rest}>
    <span>Saving</span>
  </PrimaryButton>
);

export const WithIcon: Story = ({ children, ...rest }) => (
  <PrimaryButton {...rest}>
    <SaveIcon width={16} height={16} /><span>{children}</span>
  </PrimaryButton>
);

export const WithAction: Story = ({ children, ...rest }) => (
  <PrimaryButton onClick={() => alert('boo')} {...rest}>
    {children}
  </PrimaryButton>
);
