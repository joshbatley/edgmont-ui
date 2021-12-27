import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { Select } from './Select';
import { SelectList } from './SelectList';
import { SelectItem } from './SelectItem';
import { SelectFilter } from './SelectFilter';
import { sizeSelect } from 'storybook-helpers/presets';

export default {
  title: 'inputs/Select/Custom',
  component: Select,
  args: {
    label: 'My select menu',
  },
  argTypes: {
    size: sizeSelect,
  },
} as Meta;


const valuesComplex = [{ value: 'hello', label: 'this is hello' }, { value: 'world', label: 'this is world' }];

export const Filter: Story = ({ ...rest }) => (
  <Select {...rest} onChange={(...item) => console.log(item)} itemToString={item => item ? item.value : ''} >
    <SelectFilter error placeholder="Options" />
    <SelectList>
      {valuesComplex.map((item, i) => (
        <SelectItem item={item} index={i} key={item.value} />
      ))}
    </SelectList>
  </Select>
);

// Baic Example of complex
// Example of complex complex
