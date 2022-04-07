import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { sizeSelect } from 'storybook-helpers/presets';
import { SimpleSelect } from '.';

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
} as Meta;

const values = ['hello', 'worlds', 'yeah us to', 'some more options', 'Selectable value'];

export const Default: Story = ({ ...rest }) => (
  <SimpleSelect values={values} {...rest} />
);

export const Disabled: Story = ({ disabled, ...rest }) => (
  <SimpleSelect values={values} disabled {...rest} />
);
Disabled.argTypes = {
  disabled: { table: { disable: true } },
};

export const Errored: Story = ({ error, ...rest }) => (
  <SimpleSelect values={values} error {...rest} />
);
Errored.argTypes = {
  error: { table: { disable: true } },
};

export const Clearable: Story = ({ isClearable, ...rest }) => (
  <SimpleSelect values={values} isClearable initialSelectedItem="Selectable value" {...rest} />
);
Clearable.argTypes = {
  isClearable: { table: { disable: true } },
};

export const Filterable: Story = ({ isFilterable, ...rest }) => (
  <SimpleSelect values={values} isFilterable {...rest} />
);
Filterable.argTypes = {
  isFilterable: { table: { disable: true } },
};
