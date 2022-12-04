import React, { useState } from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { colorSelectWithWhite } from 'storybook-helpers/presets';
import { OutlineButton, PrimaryButton } from 'inputs';
import { Text } from 'data';
import { Backdrop } from '.';

export default {
  title: 'Utils/Backdrop',
  component: Backdrop,
  args: {
    color: 'primary',
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
      {open && (
        <Backdrop onClick={() => setOpen(!open)} {...rest}>
          <div className="bg-white h-2/5 w-2/5 flex justify-center items-center flex-col space-y-5">
            <Text>Hit the close button, or Escape key or click the backdrop</Text>
            <PrimaryButton color="error" onClick={() => setOpen(!open)}>
              Close
            </PrimaryButton>
          </div>
        </Backdrop>)
      }
    </>);
};
