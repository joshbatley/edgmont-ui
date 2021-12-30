import React, { useState } from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { Backdrop } from './';
import { colorSelectWithWhite } from 'storybook-helpers/presets';
import { OutlineButton, PrimaryButton } from 'inputs';

export default {
  title: 'Base/Backdrop',
  component: Backdrop,
  args: {
    color: 'gray',
  },
  argTypes: {
    color: colorSelectWithWhite,
  },
} as Meta;

export const Default: Story = ({ ...rest }) => {
  let [open, setOpen] = useState(false);
  return (
    <>
      <OutlineButton onClick={() => setOpen(!open)}>open</OutlineButton>
      {open && <Backdrop {...rest}>
        <div className="bg-white h-2/5 w-2/5 flex justify-center items-center"><PrimaryButton color="red" onClick={() => setOpen(!open)}>Close</PrimaryButton></div>
      </Backdrop>}
    </>);
};
