import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { sizeSelect } from '../../../storybook-helpers/presets';
import { ArrowDownOnSquareIcon } from '@heroicons/react/24/outline';
import { OutlineButton } from '../OutlineButton';
import { Box } from '../../../data';

export default {
  title: 'Inputs/Buttons/Outline',
  component: OutlineButton,
  args: {
    children: 'Get started',
  },
  argTypes: {
    size: sizeSelect,
  },
} as Meta;

export const Example: Story = ({ children, ...rest }) => <OutlineButton {...rest}>{children}</OutlineButton>;

export const Sizes: Story = ({ children, ...rest }) => (
  <Box spaceXBetween="4">
    <OutlineButton size="large" {...rest}>{children}</OutlineButton>
    <OutlineButton size="medium" {...rest}>{children}</OutlineButton>
    <OutlineButton size="small" {...rest}>{children}</OutlineButton>
  </Box>
);
Sizes.argTypes = {
  size: {
    table: {
      disable: true,
    },
  },
};

export const Loading: Story = ({ children, ...rest }) => (
  <OutlineButton {...rest}>
    <span>Saving</span>
  </OutlineButton>
);

export const WithIcon: Story = ({ children, ...rest }) => (
  <OutlineButton {...rest}>
    <ArrowDownOnSquareIcon width={16} height={16} /><span>{children}</span>
  </OutlineButton>
);
