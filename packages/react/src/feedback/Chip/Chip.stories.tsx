import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { colorSelect, sizeSelect } from 'storybook-helpers/presets';
import { Chip } from '.';

export default {
  title: 'Feedback/Chip',
  component: Chip,
  args: {
    children: 'Chip',
  },
  argTypes: {
    color: colorSelect,
    size: sizeSelect,
  },
} as Meta;

export const Example: Story = ({ children, ...rest }) => <Chip {...rest}>{children}</Chip>;

export const Sizes: Story = ({ children, ...rest }) => (
  <div className="space-x-4">
    <Chip {...rest} size="large">{children}</Chip>
    <Chip {...rest} size="medium">{children}</Chip>
    <Chip {...rest} size="small">{children}</Chip>
  </div>
);
Sizes.argTypes = {
  size: {
    table: {
      disable: true,
    },
  },
};

export const Colors: Story = ({ children, ...rest }) => (
  <div className="space-x-4">
    {colorSelect.options.map((c) => (
      <Chip {...rest} key={c} color={c}>{children}</Chip>
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

export const WithDelete: Story = ({ children, ...rest }) => (
  <Chip handleDelete={() => alert('deleting')} {...rest}>{children}</Chip>
);
