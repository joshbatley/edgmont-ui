import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { Title as Comp, HeadingProps } from '.';
import { Box } from 'data/Box';

export default {
  title: 'Data/Text',
  component: Comp,
  args: {
    children: 'My Text element',
  },
} as Meta<HeadingProps>;

export const Titles: Story<HeadingProps> = ({ children, ...rest }) => (
  <Box spaceYBetween="2">
    <Comp as="h1">{children}</Comp>
    <Comp as="h2" >{children}</Comp>
    <Comp as="h3">{children}</Comp>
    <Comp as="h4">{children}</Comp>
    <Comp as="h5">{children}</Comp>
    <Comp as="h6">{children}</Comp>
  </Box>
);
