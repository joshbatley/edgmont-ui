import { StoryObj } from '@storybook/react';
import { Box, Radio } from '@edgmont-ui/react';
import { useState } from 'react';

export default {
  title: 'Inputs/Radio',
  component: Radio,
};

export const Showcase: StoryObj<typeof Radio> = {
  render: () => (
    <Box spaceYBetween="2">
      <Radio labelText="Radio" />
      <Radio checked labelText="Radio Radio" />
      <Radio disabled labelText="Radio Radio" />
      <Radio checked disabled labelText="Radio Radio Checkbox" />
    </Box>
  ),
};



export const Demo: StoryObj<typeof Radio> = {
  render: () => {
    let [selected, setSelected] = useState<string>();
    function onChange(e: any) {
      setSelected(e.currentTarget.value);
    }
    return (
      <Box spaceYBetween="2">
        <Radio value="1" name="demo" checked={selected === '1'} onChange={onChange} labelText="1" />
        <Radio value="2" name="demo" checked={selected === '2'} onChange={onChange} labelText="2" />
        <Radio value="3" name="demo" checked={selected === '3'} onChange={onChange} labelText="3" />
        <Radio value="4" name="demo" checked={selected === '4'} onChange={onChange} labelText="4" />
      </Box>
    );
  },
};
