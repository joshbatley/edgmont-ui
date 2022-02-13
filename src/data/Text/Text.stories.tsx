import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { Text, TextMono, TextProps } from '.';

export default {
  title: 'Data/Text',
  component: Text,
  args: {
    children: 'My Text element',
  },
  argTypes: {
    as: {
      options: ['p', 'span', 'b'],
    },
  },
} as Meta<TextProps>;

export const Default: Story<TextProps> = ({ children, ...rest }) => <Text {...rest}>{children}</Text>;
export const Mono: Story<TextProps> = ({ children, ...rest }) => <TextMono {...rest}>{children}</TextMono>;
