import { StoryObj } from '@storybook/react';
import { SimpleSelect } from '@edgmont-ui/react/src/inputs/Select/SimpleSelect';

export default {
  title: 'Inputs/Select',
  component: SimpleSelect,
  args: {
    placeholder: 'My Simple Select Menu',
  },
  argTypes: {
    values: { table: { disable: true } },
  },
};

const values = [
  'hello',
  'worlds',
  'yeah us to',
  'some more options',
  'Selectable value',
];

export const Showcase: StoryObj<typeof SimpleSelect> = {
  render: ({ ...rest }) => (
    <>
      <SimpleSelect {...rest} values={values} />
      <br />
      <SimpleSelect {...rest} values={values} disabled />
      <br />
      <SimpleSelect
        {...rest}
        values={values}
        isClearable
        initialSelectedItem="Selectable value"
      />
      <br />
      <SimpleSelect {...rest} values={values} isFilterable />
    </>),
};

