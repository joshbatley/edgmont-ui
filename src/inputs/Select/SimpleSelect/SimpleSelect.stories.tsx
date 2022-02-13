import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { sizeSelect } from 'storybook-helpers/presets';
import { SimpleSelect } from '.';

export default {
  title: 'Inputs/Select/Simple',
  component: SimpleSelect,
  args: {
    label: 'My select menu',
  },
  argTypes: {
    size: sizeSelect,
  },
} as Meta;

const values = ['hello', 'worlds', 'yeah us to', 'some more options', 'Selectable value'];

export const Default: Story = () => (
  <SimpleSelect values={values} placeholder="My Select" />
);

export const Disabled: Story = () => (
  <SimpleSelect values={values} placeholder="My Select" disabled />
);

export const Errored: Story = () => (
  <SimpleSelect values={values} placeholder="My Select" error />
);

export const Clearable: Story = () => (
  <SimpleSelect values={values} placeholder="My Select" isClearable initialSelectedItem="Selectable value" />
);

export const Filterable: Story = () => (
  <SimpleSelect values={values} placeholder="My Select" isFilterable />
);

