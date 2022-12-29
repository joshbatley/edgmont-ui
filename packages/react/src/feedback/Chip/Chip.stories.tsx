import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { colorSelect, sizeSelect } from '../../storybook-helpers/presets';
import { Chip } from '.';
import { Box } from '../../data';

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
  <Box display="flex" alignItems="center">
    <Box mr="2">
      <Chip {...rest} size="large">{children}</Chip>
    </Box>
    <Box mr="2">
      <Chip {...rest} size="medium">{children}</Chip>
    </Box>
    <Box mr="2">
      <Chip {...rest} size="small">{children}</Chip>
    </Box>
  </Box>
);
Sizes.argTypes = {
  size: {
    table: {
      disable: true,
    },
  },
};

export const Colors: Story = ({ children, ...rest }) => (
  <Box display="flex">
    {colorSelect.options.map((c) => (
      <Box mr="2">
        <Chip {...rest} key={c} color={c}>{children}</Chip>
      </Box>
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

export const WithDelete: Story = ({ children, ...rest }) => (
  <Chip handleDelete={() => alert('deleting')} {...rest}>{children}</Chip>
);
