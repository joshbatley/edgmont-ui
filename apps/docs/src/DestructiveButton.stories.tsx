import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { ArrowDownOnSquareIcon } from '@heroicons/react/24/outline';
import { Box, DestructiveButton } from '@edgmont-ui/react';

const meta: Meta = {
  title: 'Inputs/Buttons/Destructive',
  component: DestructiveButton,
  args: {
    children: 'Get started',
  },
};
export default meta;

export const Example: StoryObj<typeof DestructiveButton> = {
  render: ({ children, ...rest }) => (
    <DestructiveButton disabled {...rest}>{children}</DestructiveButton>
  ),
};

export const Sizes: StoryObj<typeof DestructiveButton> = {
  argTypes: {
    size: {
      table: {
        disable: true,
      },
    },
  },
  render: ({ children, ...rest }) => (
    <Box spaceXBetween="4">
      <DestructiveButton size="large" {...rest}>
        {children}
      </DestructiveButton>
      <DestructiveButton size="medium" {...rest}>
        {children}
      </DestructiveButton>
      <DestructiveButton size="small" {...rest}>
        {children}
      </DestructiveButton>
    </Box>
  ),
};

export const WithIcon: StoryObj<typeof DestructiveButton> = {
  render: ({ children, ...rest }) => (
    <DestructiveButton {...rest}>
      <ArrowDownOnSquareIcon width={16} height={16} />
      <span>{children}</span>
    </DestructiveButton>
  ),
};

export const WithAction: StoryObj<typeof DestructiveButton> = {
  render: ({ children, ...rest }) => (
    <DestructiveButton onClick={() => alert('boo')} {...rest}>
      {children}
    </DestructiveButton>
  ),
};
