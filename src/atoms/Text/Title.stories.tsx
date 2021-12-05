import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { Title as Comp, HeadingProps } from './Title';

export default {
  title: 'Atoms/Text',
  component: Comp,
  argTypes: {
    children: {
      defaultValue: 'My Text element',
    },
  },
} as Meta<HeadingProps>;

export const TitleHeading1: Story<HeadingProps> = ({ children, ...args }) => <Comp as="h1" {...args}>{children}</Comp>;
export const TitleHeading2: Story<HeadingProps> = ({ children, ...args }) => <Comp as="h2"  {...args}>{children}</Comp>;
export const TitleHeading3: Story<HeadingProps> = ({ children, ...args }) => <Comp as="h3"  {...args}>{children}</Comp>;
export const TitleHeading4: Story<HeadingProps> = ({ children, ...args }) => <Comp as="h4"  {...args}>{children}</Comp>;
export const TitleHeading5: Story<HeadingProps> = ({ children, ...args }) => <Comp as="h5"  {...args}>{children}</Comp>;
export const TitleHeading6: Story<HeadingProps> = ({ children, ...args }) => <Comp as="h6"  {...args}>{children}</Comp>;

