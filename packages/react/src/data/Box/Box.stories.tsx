import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { Box, BoxProps } from '.';

export default {
  title: 'Data/Box',
  component: Box,
  args: {
    children: 'My Box',
    px: '6',
    py: '2',
  },
} as Meta<BoxProps>;

export const Example: Story<BoxProps> = ({ children, ...rest }: any) => <Box {...rest}>{children}</Box>;
