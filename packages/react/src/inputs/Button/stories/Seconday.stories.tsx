import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { colorSelect, sizeSelect } from 'storybook-helpers/presets';
import { ArrowDownOnSquareIcon } from '@heroicons/react/24/outline';
import { SecondaryButton } from '../SecondaryButton';
import { Box } from 'data';

export default {
  title: 'Inputs/Buttons/Secondary',
  component: SecondaryButton,
  args: {
    children: 'Get started',
  },
  argTypes: {
    size: sizeSelect,
    color: colorSelect,
  },
} as Meta;

export const Example: Story = ({ children, ...rest }) => <SecondaryButton {...rest}>{children}</SecondaryButton>;

export const Sizes: Story = ({ children, ...rest }) => (
  <Box spaceXBetween="4">
    <SecondaryButton size="large" {...rest}>{children}</SecondaryButton>
    <SecondaryButton size="medium" {...rest}>{children}</SecondaryButton>
    <SecondaryButton size="small" {...rest}>{children}</SecondaryButton>
  </Box>
);
Sizes.argTypes = {
  size: {
    table: {
      disable: true,
    },
  },
};

export const Colors: Story = ({ children = 'save' }) => (
  <Box display="grid" gridTemplateColumns="repeat(6, minmax(0, 1fr))" gridGap="4">
    {colorSelect.options.map((c) => (
      <SecondaryButton key={c} color={c}>{children}</SecondaryButton>
    ))}
  </Box>
);
Colors.argTypes = {
  color: {
    table: {
      disable: true,
    },
  },
};

export const Loading: Story = ({ children, ...rest }) => (
  <SecondaryButton isLoading {...rest}>
    <span>Saving</span>
  </SecondaryButton>
);

export const WithIcon: Story = ({ children, ...rest }) => (
  <SecondaryButton {...rest}>
    <ArrowDownOnSquareIcon width={16} height={16} /><span>{children}</span>
  </SecondaryButton>
);
