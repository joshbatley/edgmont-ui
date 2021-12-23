import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { Select } from './Select';
import { SelectList } from './SelectList';
import { SelectItem } from './SelectItem';
import { SelectFilter } from './SelectFilter';
import { SimpleSelect } from './SimpleSelect';

export default {
  title: 'Atoms/Controls/Select',
  component: Select,
  args: {
    label: 'My select menu',
  },
  argTypes: {
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'select' },
    },
  },
} as Meta;

const values = ['hello', 'worlds', 'yeah us to', 'some more options'];
const valuesComplex = [{ value: 'hello', label: 'this is hello' }, { value: 'world', label: 'this is world' }];

export const Default: Story = ({ ...args }) => (
  <SimpleSelect values={values} placeholder="My Select" />
);

export const Filter: Story = ({ ...args }) => (
  <Select {...args} onChange={(...item) => console.log(item)} itemToString={item => item ? item.value : ''} >
    <SelectFilter error placeholder="Options" />
    <SelectList>
      {valuesComplex.map((item, i) => (
        <SelectItem item={item} index={i} key={item.value} />
      ))}
    </SelectList>
  </Select>
);


// Simple
// Simple with props
// Baic Example of complex
// Example of complex complex
