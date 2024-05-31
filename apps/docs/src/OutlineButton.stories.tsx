import React from 'react';
import { StoryObj } from '@storybook/react';
import { ArrowDownOnSquareIcon } from '@heroicons/react/24/outline';
import { OutlineButton } from '@edgmont-ui/react';

export default {
  title: 'Inputs/Buttons/Outline',
  component: OutlineButton,
  args: {
    children: 'Get started',
  },
};

export const Example: StoryObj<typeof OutlineButton> = {
  render: ({ children, ...rest }) => (
    <OutlineButton {...rest}>{children}</OutlineButton>
  ),
};

export const WithIcon: StoryObj<typeof OutlineButton> = {
  render: ({ children, ...rest }) => (
    <OutlineButton {...rest}>
      <ArrowDownOnSquareIcon width={16} height={16} />
      <span>{children}</span>
    </OutlineButton>
  ),
};
