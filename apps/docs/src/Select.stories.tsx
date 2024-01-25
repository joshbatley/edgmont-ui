import React from 'react';
import { StoryObj } from '@storybook/react';
import {
  Select,
  SelectFilter,
  SelectItem,
  SelectList,
} from '@edgmont-ui/react';
import { sizeSelect } from './presets';

export default {
  title: 'Inputs/Select/Controlled',
  component: Select,
  args: {
    placeholder: 'My select menu',
    error: false,
    disabled: false,
  },
  argTypes: {
    size: sizeSelect,
  },
};

const valuesComplex = [
  { value: 'hello', label: 'this is hello' },
  { value: 'world', label: 'this is world' },
];

export const Example: StoryObj<typeof Select & typeof SelectFilter> = {
  render: ({ placeholder, ...rest }) => (
    <Select
      {...rest}
      onChange={(...item) => console.log(item)}
      itemToString={(item) => (item ? item.value : '')}
    >
      <SelectFilter {...rest} placeholder={placeholder} />
      <SelectList>
        {valuesComplex.map((item, i) => (
          <SelectItem item={item} index={i} key={item.value} />
        ))}
      </SelectList>
    </Select>
  ),
};
