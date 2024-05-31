import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { ArrowDownOnSquareIcon } from '@heroicons/react/24/outline';
import { PrimaryButton } from '@edgmont-ui/react';

const meta: Meta = {
  title: 'Inputs/Buttons/Primary',
  component: PrimaryButton,
  args: {
    children: 'Get started',
  },
};
export default meta;

export const Example: StoryObj<typeof PrimaryButton> = {
  render: ({ children, ...rest }) => (
    <PrimaryButton disabled {...rest}>{children}</PrimaryButton>
  ),
};

export const WithIcon: StoryObj<typeof PrimaryButton> = {
  render: ({ children, ...rest }) => (
    <PrimaryButton {...rest}>
      <ArrowDownOnSquareIcon width={16} height={16} />
      <span>{children}</span>
    </PrimaryButton>
  ),
};

export const WithAction: StoryObj<typeof PrimaryButton> = {
  render: ({ children, ...rest }) => (
    <PrimaryButton onClick={() => alert('boo')} {...rest}>
      {children}
    </PrimaryButton>
  ),
};
