import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Box, Title as Comp } from '@edgmont-ui/react';

const meta: Meta = {
  title: 'Data/Text',
  component: Comp,
  args: {
    children: 'My Text element',
  },
};
export default meta;

export const Titles: StoryObj<typeof Comp> = {
  render: ({ children }) => (
    <Box spaceYBetween="2">
      <Comp as="h1">{children}</Comp>
      <Comp as="h2">{children}</Comp>
      <Comp as="h3">{children}</Comp>
      <Comp as="h4">{children}</Comp>
      <Comp as="h5">{children}</Comp>
      <Comp as="h6">{children}</Comp>
    </Box>
  ),
};
