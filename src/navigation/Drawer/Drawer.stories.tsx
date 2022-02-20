import React, { useState } from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { PrimaryButton } from 'inputs';
import { Drawer } from '.';

export default {
  title: 'Navigation/Drawer',
  component: Drawer,
} as Meta;

export const Example: Story = ({ ...rest }) => {
  let [open, setOpen] = useState(false);
  return (
    <>
      <div className='grid h-screen place-content-center'>
        <PrimaryButton onClick={() => setOpen(!open)}>Open Drawer</PrimaryButton>
      </div>
      <Drawer open={open} handleClose={() => setOpen(false)} {...rest}>
        <div className="p-4">This is a drawer</div>
      </Drawer>
    </>
  );
};
