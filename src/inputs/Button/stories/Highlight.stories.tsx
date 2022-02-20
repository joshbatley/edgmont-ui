import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { sizeSelect } from 'storybook-helpers/presets';
import { SaveIcon } from 'feedback/Icons/Outline';
import { HighlightButton } from '../HighlightButton';

export default {
  title: 'Inputs/Buttons/Highlight',
  component: HighlightButton,
  args: {
    children: 'Get started',
  },
  argTypes: {
    size: sizeSelect,
  },
} as Meta;

export const Example: Story = ({ children, ...rest }) => <HighlightButton {...rest}>{children}</HighlightButton>;

export const Sizes: Story = ({ children, ...rest }) => (
  <div className="space-x-4">
    <HighlightButton size="large" {...rest}>{children}</HighlightButton>
    <HighlightButton size="medium" {...rest}>{children}</HighlightButton>
    <HighlightButton size="small" {...rest}>{children}</HighlightButton>
  </div>
);
Sizes.argTypes = {
  size: {
    table: {
      disable: true,
    },
  },
};

export const Loading: Story = ({ children, ...rest }) => (
  <HighlightButton isLoading {...rest}>
    <span>Saving</span>
  </HighlightButton>
);

export const WithIcon: Story = ({ children, ...rest }) => (
  <HighlightButton {...rest}>
    <SaveIcon width={16} height={16} /><span>{children}</span>
  </HighlightButton>
);
