import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { SimpleSelect } from './SimpleSelect';
import { sizeSelect } from 'storybook-helpers/presets';

export default {
  title: 'inputs/Select/Simple',
  component: SimpleSelect,
  args: {
    label: 'My select menu',
  },
  argTypes: {
    size: sizeSelect,
  },
} as Meta;

const values = ['hello', 'worlds', 'yeah us to', 'some more options', 'Selectable value'];

export const Default: Story = ({ ...rest }) => (
  <SimpleSelect values={values} placeholder="My Select" />
);

export const Disabled: Story = ({ ...rest }) => (
  <SimpleSelect values={values} placeholder="My Select" disabled />
);

export const Errored: Story = ({ ...rest }) => (
  <SimpleSelect values={values} placeholder="My Select" error />
);

export const Clearable: Story = ({ ...rest }) => (
  <SimpleSelect values={values} placeholder="My Select" isClearable initialSelectedItem="Selectable value" />
);

export const Filterable: Story = ({ ...rest }) => (
  <SimpleSelect values={values} placeholder="My Select" isFilterable />
);

