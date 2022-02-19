import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { Text as T, TextMono, TextProps } from '.';

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

export const Text: Story<TextProps> = ({ children, ...rest }) => <T {...rest}>{children}</T>;
export const Mono: Story<TextProps> = ({ children, ...rest }) => <TextMono {...rest}>{children}</TextMono>;
