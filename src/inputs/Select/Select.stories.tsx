import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { sizeSelect } from 'storybook-helpers/presets';
import { Select, SelectList, SelectItem, SelectFilter } from '.';

export default {
  title: 'Inputs/Select/Custom',
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
