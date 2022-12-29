import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { ArrowDownOnSquareIcon } from '@heroicons/react/24/outline';
import { colorSelect, sizeSelect } from '../../../storybook-helpers/presets';
import { Box } from '../../../data';
import { PrimaryButton } from '../PrimaryButton';

export default {
  title: 'Inputs/Buttons/Primary',
  component: PrimaryButton,
  args: {
    children: 'Get started',
  },
  argTypes: {
    size: sizeSelect,
    color: colorSelect,
  },
} as Meta;

export const Example: Story = ({ children, ...rest }) => <PrimaryButton {...rest}>{children}</PrimaryButton>;

export const Sizes: Story = ({ children, ...rest }) => (
  <Box spaceXBetween="4">
    <PrimaryButton size="large" {...rest}>{children}</PrimaryButton>
    <PrimaryButton size="medium" {...rest}>{children}</PrimaryButton>
    <PrimaryButton size="small" {...rest}>{children}</PrimaryButton>
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
      <PrimaryButton key={c} color={c}>{children}</PrimaryButton>
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

export const WithIcon: Story = ({ children, ...rest }) => (
  <PrimaryButton {...rest}>
    <ArrowDownOnSquareIcon width={16} height={16} /><span>{children}</span>
  </PrimaryButton>
);

export const WithAction: Story = ({ children, ...rest }) => (
  <PrimaryButton onClick={() => alert('boo')} {...rest}>
    {children}
  </PrimaryButton>
);
