import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { ArrowDownOnSquareIcon } from '@heroicons/react/24/outline';
import { Box, PrimaryButton } from '@edgmont-ui/react';
import { colorSelect, sizeSelect } from './presets';

const meta: Meta = {
  title: 'Inputs/Buttons/Primary',
  component: PrimaryButton,
  args: {
    children: 'Get started',
  },
  argTypes: {
    size: sizeSelect,
    color: colorSelect,
  },
};
export default meta;

export const Example: StoryObj<typeof PrimaryButton> = {
  render: ({ children, ...rest }) => (
    <PrimaryButton {...rest}>{children}</PrimaryButton>
  ),
};

export const Sizes: StoryObj<typeof PrimaryButton> = {
  argTypes: {
    size: {
      table: {
        disable: true,
      },
    },
  },
  render: ({ children, ...rest }) => (
    <Box spaceXBetween="4">
      <PrimaryButton size="large" {...rest}>
        {children}
      </PrimaryButton>
      <PrimaryButton size="medium" {...rest}>
        {children}
      </PrimaryButton>
      <PrimaryButton size="small" {...rest}>
        {children}
      </PrimaryButton>
    </Box>
  ),
};

export const Colors: StoryObj<typeof PrimaryButton> = {
  argTypes: {
    color: {
      table: {
        disable: true,
      },
    },
  },
  render: ({ children = 'save' }) => (
    <Box
      display="grid"
      gridTemplateColumns="repeat(6, minmax(0, 1fr))"
      gridGap="4"
    >
      {colorSelect.options.map((c) => (
        <PrimaryButton key={c} color={c}>
          {children}
        </PrimaryButton>
      ))}
    </Box>
  ),
};

export const WithIcon: StoryObj<typeof PrimaryButton> = {
  render: ({ children, ...rest }) => (
    <PrimaryButton {...rest}>
      <ArrowDownOnSquareIcon width={16} height={16} />
      <span>{children}</span>
    </PrimaryButton>
  ),
};

export const WithAction: StoryObj<typeof PrimaryButton> = {
  render: ({ children, ...rest }) => (
    <PrimaryButton onClick={() => alert('boo')} {...rest}>
      {children}
    </PrimaryButton>
  ),
};
