import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { colorSelectWithWhite, sizeSelect } from 'storybook-helpers/presets';
import { SaveIcon } from '@heroicons/react/outline';
import { PrimaryButton } from '../PrimaryButton';

export default {
  title: 'Inputs/Buttons/Primary',
  component: PrimaryButton,
  args: {
    children: 'Get started',
  },
  argTypes: {
    size: sizeSelect,
    color: colorSelectWithWhite,
  },
} as Meta;

export const Example: Story = ({ children, ...rest }) => <PrimaryButton {...rest}>{children}</PrimaryButton>;

export const Sizes: Story = ({ children, ...rest }) => (
  <div className="space-x-4">
    <PrimaryButton size="large" {...rest}>{children}</PrimaryButton>
    <PrimaryButton size="medium" {...rest}>{children}</PrimaryButton>
    <PrimaryButton size="small" {...rest}>{children}</PrimaryButton>
  </div>
);
Sizes.argTypes = {
  size: {
    table: {
      disable: true,
    },
  },
};

export const Colors: Story = ({ children = 'save' }) => (
  <div className="grid grid-cols-6 gap-4">
    {colorSelectWithWhite.options.map((c) => (
      <PrimaryButton key={c} color={c}>{children}</PrimaryButton>
    ))}
  </div>
);
Colors.argTypes = {
  color: {
    table: {
      disable: true,
    },
  },
};

export const Loading: Story = ({ children, ...rest }) => (
  <PrimaryButton isLoading {...rest}>
    <span>Saving</span>
  </PrimaryButton>
);

export const WithIcon: Story = ({ children, ...rest }) => (
  <PrimaryButton {...rest}>
    <SaveIcon width={16} height={16} /><span>{children}</span>
  </PrimaryButton>
);

export const WithAction: Story = ({ children, ...rest }) => (
  <PrimaryButton onClick={() => alert('boo')} {...rest}>
    {children}
  </PrimaryButton>
);
