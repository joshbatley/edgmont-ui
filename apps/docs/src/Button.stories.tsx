import React from 'react';
import { StoryObj } from '@storybook/react';
import { ArrowDownOnSquareIcon } from '@heroicons/react/24/outline';
import { Box } from '@edgmont-ui/react';
import { Button } from '@edgmont-ui/react';

export default {
  title: 'Inputs/Buttons/Button',
  component: Button,
  args: {
    children: 'Get started',
  },
};

export const Example: StoryObj<typeof Button> = {
  render: ({ children, ...rest }) => <Button {...rest}>{children}</Button>,
};

export const Sizes: StoryObj<typeof Button> = {
  argTypes: {
    size: {
      table: {
        disable: true,
      },
    },
  },
  render: ({ children, ...rest }) => (
    <Box spaceXBetween="4">
      <Button {...rest}>
        {children}
      </Button>
      <Button {...rest}>
        {children}
      </Button>
      <Button {...rest}>
        {children}
      </Button>
    </Box>
  ),
};

export const WithIcon: StoryObj<typeof Button> = {
  render: ({ children, ...rest }) => (
    <Button {...rest}>
      <ArrowDownOnSquareIcon width={16} height={16} />
      <span>{children}</span>
    </Button>
  ),
};
