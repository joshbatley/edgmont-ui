import React from 'react';
import { StoryObj } from '@storybook/react';
import { ArrowDownOnSquareIcon } from '@heroicons/react/24/outline';
import { Box, OutlineButton } from '@edgmont-ui/react';
import { sizeSelect } from './presets';

export default {
  title: 'Inputs/Buttons/Outline',
  component: OutlineButton,
  args: {
    children: 'Get started',
  },
  argTypes: {
    size: sizeSelect,
  },
};

export const Example: StoryObj<typeof OutlineButton> = {
  render: ({ children, ...rest }) => (
    <OutlineButton {...rest}>{children}</OutlineButton>
  ),
};

export const Sizes: StoryObj<typeof OutlineButton> = {
  argTypes: {
    size: {
      table: {
        disable: true,
      },
    },
  },
  render: ({ children, ...rest }) => (
    <Box spaceXBetween="4">
      <OutlineButton size="large" {...rest}>
        {children}
      </OutlineButton>
      <OutlineButton size="medium" {...rest}>
        {children}
      </OutlineButton>
      <OutlineButton size="small" {...rest}>
        {children}
      </OutlineButton>
    </Box>
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
