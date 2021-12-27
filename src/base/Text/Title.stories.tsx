import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { Title as Comp, HeadingProps } from './Title';

export default {
  title: 'Base/Text',
  component: Comp,
  args: {
    children: 'My Text element',
  },
} as Meta<HeadingProps>;

export const TitleHeading1: Story<HeadingProps> = ({ children, ...rest }) => <Comp as="h1" {...rest}>{children}</Comp>;
export const TitleHeading2: Story<HeadingProps> = ({ children, ...rest }) => <Comp as="h2"  {...rest}>{children}</Comp>;
export const TitleHeading3: Story<HeadingProps> = ({ children, ...rest }) => <Comp as="h3"  {...rest}>{children}</Comp>;
export const TitleHeading4: Story<HeadingProps> = ({ children, ...rest }) => <Comp as="h4"  {...rest}>{children}</Comp>;
export const TitleHeading5: Story<HeadingProps> = ({ children, ...rest }) => <Comp as="h5"  {...rest}>{children}</Comp>;
export const TitleHeading6: Story<HeadingProps> = ({ children, ...rest }) => <Comp as="h6"  {...rest}>{children}</Comp>;

