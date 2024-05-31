import React from 'react';
import { StoryObj } from '@storybook/react';
import { Chip } from '@edgmont-ui/react';

export default {
  title: 'Feedback/Chip',
  component: Chip,
  args: {
    children: 'Chip',
  },
};

export const Example: StoryObj<typeof Chip> = {
  render: ({ children, ...rest }) => <Chip {...rest}>{children}</Chip>,
};

