import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { Text as T, TextProps } from '.';

export default {
  title: 'Data/Text',
  component: T,
  args: {
    children: 'My Text element',
  },
  argTypes: {
    as: {
      options: ['p', 'span', 'b'],
    },
  },
} as Meta<TextProps>;

export const Text: Story<TextProps & { children: any, as: any }> = ({ children, as }) => <T as={as}>{children}</T>;
export const Mono: Story<TextProps & { children: any, as: any }> = ({ children, as }) => <T as={as} mono>{children}</T>;
