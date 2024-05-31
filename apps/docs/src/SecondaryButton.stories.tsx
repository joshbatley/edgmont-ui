import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { ArrowDownOnSquareIcon } from '@heroicons/react/24/outline';
import { SecondaryButton } from '@edgmont-ui/react';

const meta: Meta = {
  title: 'Inputs/Buttons/Secondary',
  component: SecondaryButton,
  args: {
    children: 'Get started',
  },
};
export default meta;

export const Example: StoryObj<typeof SecondaryButton> = {
  render: ({ children, ...rest }) => (
    <SecondaryButton {...rest}>{children}</SecondaryButton>
  ),
};

export const WithIcon: StoryObj<typeof SecondaryButton> = {
  render: ({ children, ...rest }) => (
    <SecondaryButton {...rest}>
      <ArrowDownOnSquareIcon width={16} height={16} />
      <span>{children}</span>
    </SecondaryButton>
  ),
};

export const WithAction: StoryObj<typeof SecondaryButton> = {
  render: ({ children, ...rest }) => (
    <SecondaryButton onClick={() => alert('boo')} {...rest}>
      {children}
    </SecondaryButton>
  ),
};
