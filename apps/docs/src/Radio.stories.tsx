import React from 'react';
import { StoryObj } from '@storybook/react';
import { Box, Radio } from '@edgmont-ui/react';

export default {
  title: 'Inputs/Radio',
  component: Radio,
  argTypes: {
    labelText: { table: { disable: true } },
  },
};

function change(e: any) {
  console.log(e.target.value);
}

export const Default: StoryObj<typeof Radio> = {
  render: ({ children, ...rest }) => (
    <Box spaceYBetween="2">
      <Radio name="default" labelText="123" onChange={change} {...rest} />
      <Radio name="default" labelText="456" onChange={change} {...rest} />
      <Radio name="default" labelText="789" onChange={change} {...rest} />
    </Box>
  ),
};

export const Disabled: StoryObj<typeof Radio> = {
  argTypes: {
    disabled: { table: { disable: true } },
  },
  render: ({ children, disabled, ...rest }) => (
    <Box spaceYBetween="2">
      <Radio
        disabled
        name="default"
        labelText="123"
        onChange={change}
        {...rest}
      />
      <Radio
        disabled
        checked
        name="default"
        labelText="456"
        onChange={change}
        {...rest}
      />
      <Radio
        disabled
        name="default"
        labelText="789"
        onChange={change}
        {...rest}
      />
    </Box>
  ),
};
