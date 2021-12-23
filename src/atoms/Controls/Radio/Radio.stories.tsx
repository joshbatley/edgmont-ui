import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { Radio } from './Radio';
import { colorSelect } from 'storybook-helpers/presets';

export default {
  title: 'Atoms/Controls/Radio',
  component: Radio,
  args: {
    labelText: 'My Text element',
  },
  argTypes: {
    color: colorSelect,
  },
} as Meta;

function change(e: any) {
  console.log(e.target.value);
}

export const Default: Story = ({ children, ...args }) => (
  <div>
    <Radio name="default" value="123" onChange={change} {...args} />
    <Radio name="default" value="456" onChange={change} {...args} />
    <Radio checked name="default" value="789" onChange={change} {...args} />
  </div>
);


export const Disabled: Story = ({ children, ...args }) => (
  <div>
    <Radio disabled name="default" value="123" onChange={change} {...args} />
    <Radio disabled checked name="default" value="456" onChange={change} {...args} />
    <Radio disabled name="default" value="789" onChange={change} {...args} />
  </div>
);

export const Errored: Story = ({ children, ...args }) => (
  <div>
    <Radio error name="default" value="123" onChange={change} {...args} />
    <Radio error checked name="default" value="456" onChange={change} {...args} />
    <Radio error disabled name="default" value="789" onChange={change} {...args} />
  </div>
);
