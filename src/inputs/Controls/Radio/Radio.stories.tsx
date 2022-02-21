import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { colorSelect } from 'storybook-helpers/presets';
import { Radio } from '.';

export default {
  title: 'Inputs/Radio',
  component: Radio,
  argTypes: {
    labelText: { table: { disable: true } },
    color: colorSelect,
  },
} as Meta;

function change(e: any) {
  console.log(e.target.value);
}

export const Default: Story = ({ children, ...rest }) => (
  <div className="space-y-2">
    <Radio name="default" labelText="123" onChange={change} {...rest} />
    <Radio name="default" labelText="456" onChange={change} {...rest} />
    <Radio name="default" labelText="789" onChange={change} {...rest} />
  </div>
);

export const Disabled: Story = ({ children, disabled, ...rest }) => (
  <div className="space-y-2">
    <Radio disabled name="default" labelText="123" onChange={change} {...rest} />
    <Radio disabled checked name="default" labelText="456" onChange={change} {...rest} />
    <Radio disabled name="default" labelText="789" onChange={change} {...rest} />
  </div>
);
Disabled.argTypes = {
  disabled: { table: { disable: true } },
};

export const Errored: Story = ({ children, ...rest }) => (
  <div className="space-y-2">
    <Radio error name="default" labelText="123" onChange={change} {...rest} />
    <Radio error checked name="default" labelText="456" onChange={change} {...rest} />
    <Radio error name="default" labelText="789" onChange={change} {...rest} />
  </div>
);
