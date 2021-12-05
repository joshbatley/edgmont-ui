import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { Box, BoxProps } from './';

export default {
  title: 'Atoms/Box',
  component: Box,
  args: {
    classes: 'bg-white',
    children: 'My Box',

  },
} as Meta<BoxProps>;

export const Default: Story<BoxProps> = ({ children, ...args }) => <Box {...args}>{children}</Box>;
