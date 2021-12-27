import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';

import { SaveIcon } from 'base/Icons/Outline';
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

export const Default: Story = ({ children, ...rest }) => <HighlightButton {...rest}>{children}</HighlightButton>;

export const Sizes: Story = ({ children, ...rest }) => (
  <div className="space-x-4">
    <HighlightButton size="large" {...rest}>{children}</HighlightButton>
    <HighlightButton size="medium" {...rest}>{children}</HighlightButton>
    <HighlightButton size="small" {...rest}>{children}</HighlightButton>
  </div>
);

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
