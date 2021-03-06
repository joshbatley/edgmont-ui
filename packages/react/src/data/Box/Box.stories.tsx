import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { Box, BoxProps } from '.';

export default {
  title: 'Data/Box',
  component: Box,
  args: {
    className: '',
    children: 'My Box',
  },
} as Meta<BoxProps>;

export const Example: Story<BoxProps> = ({ children, ...rest }) => <Box {...rest}>{children}</Box>;
