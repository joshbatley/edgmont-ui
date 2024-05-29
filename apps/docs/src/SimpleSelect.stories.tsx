import React from 'react';
import { StoryObj } from '@storybook/react';
import { sizeSelect } from './presets';
import { SimpleSelect } from '@edgmont-ui/react/src/inputs/Select/SimpleSelect';

export default {
  title: 'Inputs/Select/Simple',
  component: SimpleSelect,
  args: {
    placeholder: 'My Simple Select Menu',
    error: false,
    disabled: false,
    isClearable: false,
    isFilterable: false,
  },
  argTypes: {
    values: { table: { disable: true } },
    size: sizeSelect,
  },
};

const values = [
  'hello',
  'worlds',
  'yeah us to',
  'some more options',
  'Selectable value',
];

export const Default: StoryObj<typeof SimpleSelect> = {
  render: ({ ...rest }) => <SimpleSelect {...rest} values={values} />,
};

export const Disabled: StoryObj<typeof SimpleSelect> = {
  argTypes: {
    disabled: { table: { disable: true } },
  },
  render: ({ disabled, ...rest }) => (
    <SimpleSelect {...rest} values={values} disabled />
  ),
};

export const Errored: StoryObj<typeof SimpleSelect> = {
  render: ({ ...rest }) => (
    <SimpleSelect {...rest} values={values} />
  ),
};

export const Clearable: StoryObj<typeof SimpleSelect> = {
  argTypes: {
    isClearable: { table: { disable: true } },
  },
  render: ({ isClearable, ...rest }) => (
    <SimpleSelect
      {...rest}
      values={values}
      isClearable
      initialSelectedItem="Selectable value"
    />
  ),
};

export const Filterable: StoryObj<typeof SimpleSelect> = {
  argTypes: {
    isFilterable: { table: { disable: true } },
  },
  render: ({ isFilterable, ...rest }) => (
    <SimpleSelect {...rest} values={values} isFilterable />
  ),
};
