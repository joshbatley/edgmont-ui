import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { colorSelect, sizeSelect } from 'storybook-helpers/presets';
import { Chip } from '.';

export default {
  title: 'Feedback/Chip',
  component: Chip,
  argTypes: {
    color: colorSelect,
    size: sizeSelect,
  },
} as Meta;

export const Default: Story = ({ ...rest }) => <Chip {...rest}>Chip</Chip>;

export const Sizes: Story = ({ ...rest }) => (
  <div className="space-x-4">
    <Chip {...rest} size="large">Chip</Chip>
    <Chip {...rest} size="medium">Chip</Chip>
    <Chip {...rest} size="small">Chip</Chip>
  </div>
);
export const Colors: Story = ({ ...rest }) => (
  <div className="space-x-4">
    <Chip {...rest} color="gray"> Chip</Chip >
    <Chip {...rest} color="blue">Chip</Chip>
    <Chip {...rest} color="green">Chip</Chip>
    <Chip {...rest} color="pink">Chip</Chip>
    <Chip {...rest} color="purple">Chip</Chip>
    <Chip {...rest} color="red">Chip</Chip>
    <Chip {...rest} color="teal">Chip</Chip>
    <Chip {...rest} color="yellow">Chip</Chip>
  </div>
);

export const WithDelete: Story = ({ ...rest }) => (
  <Chip handleDelete={() => console.log('delete')} {...rest}>Chip</Chip>
);
