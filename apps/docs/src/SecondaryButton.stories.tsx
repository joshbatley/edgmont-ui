import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { ArrowDownOnSquareIcon } from '@heroicons/react/24/outline';
import { Box, SecondaryButton } from '@edgmont-ui/react';
import { colorSelect } from './presets';

const meta: Meta = {
  title: 'Inputs/Buttons/Secondary',
  component: SecondaryButton,
  args: {
    children: 'Get started',
  },
};
export default meta;

export const Example: StoryObj<typeof SecondaryButton> = {
  render: ({ children, ...rest }) => (
    <SecondaryButton {...rest}>{children}</SecondaryButton>
  ),
};

export const Sizes: StoryObj<typeof SecondaryButton> = {
  argTypes: {
    size: {
      table: {
        disable: true,
      },
    },
  },
  render: ({ children, ...rest }) => (
    <Box spaceXBetween="4">
      <SecondaryButton {...rest}>
        {children}
      </SecondaryButton>
      <SecondaryButton {...rest}>
        {children}
      </SecondaryButton>
      <SecondaryButton {...rest}>
        {children}
      </SecondaryButton>
    </Box>
  ),
};

export const Colors: StoryObj<typeof SecondaryButton> = {
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
        <SecondaryButton key={c} color={c}>
          {children}
        </SecondaryButton>
      ))}
    </Box>
  ),
};

export const WithIcon: StoryObj<typeof SecondaryButton> = {
  render: ({ children, ...rest }) => (
    <SecondaryButton {...rest}>
      <ArrowDownOnSquareIcon width={16} height={16} />
      <span>{children}</span>
    </SecondaryButton>
  ),
};

export const WithAction: StoryObj<typeof SecondaryButton> = {
  render: ({ children, ...rest }) => (
    <SecondaryButton onClick={() => alert('boo')} {...rest}>
      {children}
    </SecondaryButton>
  ),
};
