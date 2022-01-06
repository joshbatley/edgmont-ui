import React, { useState } from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { Drawer } from './';
import { PrimaryButton } from 'inputs';

export default {
  title: 'Navigation/Drawer',
  component: Drawer,
} as Meta;

export const Default: Story = ({ ...rest }) => {
  let [open, setOpen] = useState(false);
  return (
    <>
      <div className='grid h-screen place-content-center'>
        <PrimaryButton onClick={() => setOpen(true)}>Open Drawer</PrimaryButton>
      </div>
      <Drawer open={open} handleClose={() => setOpen(false)} {...rest}>
        <div className="p-4">This is a drawer</div>
      </Drawer>
    </>
  );
};
