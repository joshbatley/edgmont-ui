import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';

import { SaveIcon } from 'atoms/Icons/Outline';
import { HighlightButton } from '../HighlightButton';
import { colorSelectWithWhite, sizeSelect } from 'storybook-helpers/presets';

export default {
  title: 'inputs/Button/Highlight',
  component: HighlightButton,
  args: {
    children: 'Get started',
  },
  argTypes: {
    size: sizeSelect,
    color: colorSelectWithWhite,
  },
} as Meta;

export const Default: Story = ({ children, ...args }) => <HighlightButton {...args}>{children}</HighlightButton>;

export const Sizes: Story = ({ children, ...args }) => (
  <div className="space-x-4">
    <HighlightButton size="large" {...args}>{children}</HighlightButton>
    <HighlightButton size="medium" {...args}>{children}</HighlightButton>
    <HighlightButton size="small" {...args}>{children}</HighlightButton>
  </div>
);

export const Loading: Story = ({ children, ...args }) => (
  <HighlightButton isLoading {...args}>
    <span>Saving</span>
  </HighlightButton>
);

export const WithIcon: Story = ({ children, ...args }) => (
  <HighlightButton {...args}>
    <SaveIcon width={16} height={16} /><span>{children}</span>
  </HighlightButton>
);
