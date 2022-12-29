import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { sizeSelect } from '../../../storybook-helpers/presets';
import { ArrowDownOnSquareIcon } from '@heroicons/react/24/outline';
import { Button } from '../Button';
import { Box } from '../../../data';

export default {
  title: 'Inputs/Buttons/Button',
  component: Button,
  args: {
    children: 'Get started',
  },
  argTypes: {
    size: sizeSelect,
  },
} as Meta;

export const Example: Story = ({ children, ...rest }) => <Button {...rest}>{children}</Button>;

export const Sizes: Story = ({ children, ...rest }) => (
  <Box spaceXBetween="4">
    <Button size="large" {...rest}>{children}</Button>
    <Button size="medium" {...rest}>{children}</Button>
    <Button size="small" {...rest}>{children}</Button>
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
  <Button {...rest}>
    <span>Saving</span>
  </Button>
);

export const WithIcon: Story = ({ children, ...rest }) => (
  <Button {...rest}>
    <ArrowDownOnSquareIcon width={16} height={16} /><span>{children}</span>
  </Button>
);
