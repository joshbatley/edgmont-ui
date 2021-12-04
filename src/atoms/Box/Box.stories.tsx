import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { Box, Props } from './';

export default {
  title: 'Atoms/Box',
  component: Box,
  args: {
    classes: 'bg-white',
    children: 'My Box',

  },
} as Meta<Props>;

export const Default: Story<Props> = ({ children, ...args }) => <Box {...args}>{children}</Box>;
