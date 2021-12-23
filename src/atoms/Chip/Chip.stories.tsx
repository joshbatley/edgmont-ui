import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { Chip } from './';
import { colorSelect, sizeSelect } from 'storybook-helpers/presets';

export default {
  title: 'Atoms/Chip',
  component: Chip,
  argTypes: {
    color: colorSelect,
    size: sizeSelect,
  },
} as Meta;

export const Default: Story = ({ ...args }) => <Chip {...args}>Chip</Chip>;

export const Sizes: Story = ({ ...args }) => (
  <div className="space-x-4">
    <Chip {...args} size="large">Chip</Chip>
    <Chip {...args} size="medium">Chip</Chip>
    <Chip {...args} size="small">Chip</Chip>
  </div>
);
export const Colors: Story = ({ ...args }) => (
  <div className="space-x-4">
    <Chip {...args} color="gray"> Chip</Chip >
    <Chip {...args} color="blue">Chip</Chip>
    <Chip {...args} color="green">Chip</Chip>
    <Chip {...args} color="pink">Chip</Chip>
    <Chip {...args} color="purple">Chip</Chip>
    <Chip {...args} color="red">Chip</Chip>
    <Chip {...args} color="teal">Chip</Chip>
    <Chip {...args} color="yellow">Chip</Chip>
  </div>
);

export const WithDelete: Story = ({ ...args }) => (
  <Chip handleDelete={() => console.log('delete')} {...args}>Chip</Chip>
);
