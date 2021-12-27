import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { Radio } from './Radio';
import { colorSelect } from 'storybook-helpers/presets';

export default {
  title: 'inputs/Radio',
  component: Radio,
  argTypes: {
    color: colorSelect,
  },
} as Meta;

function change(e: any) {
  console.log(e.target.value);
}

export const Default: Story = ({ children, ...rest }) => (
  <div>
    <Radio name="default" value="123" onChange={change} {...rest} />
    <Radio name="default" value="456" onChange={change} {...rest} />
    <Radio checked name="default" value="789" onChange={change} {...rest} />
  </div>
);


export const Disabled: Story = ({ children, ...rest }) => (
  <div>
    <Radio disabled name="default" value="123" onChange={change} {...rest} />
    <Radio disabled checked name="default" value="456" onChange={change} {...rest} />
    <Radio disabled name="default" value="789" onChange={change} {...rest} />
  </div>
);

export const Errored: Story = ({ children, ...rest }) => (
  <div>
    <Radio error name="default" value="123" onChange={change} {...rest} />
    <Radio error checked name="default" value="456" onChange={change} {...rest} />
    <Radio error disabled name="default" value="789" onChange={change} {...rest} />
  </div>
);
