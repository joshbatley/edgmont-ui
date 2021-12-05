import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { Text, TextMono, TextProps } from './Text';

export default {
  title: 'Atoms/Text',
  component: Text,
  argTypes: {
    as: {
      options: ['p', 'span', 'b'],

    },
    children: {
      defaultValue: 'My Text element',
    },
  },
} as Meta<TextProps>;

export const Default: Story<TextProps> = ({ children, ...args }) => <Text {...args}>{children}</Text>;
export const Mono: Story<TextProps> = ({ children, ...args }) => <TextMono {...args}>{children}</TextMono>;
