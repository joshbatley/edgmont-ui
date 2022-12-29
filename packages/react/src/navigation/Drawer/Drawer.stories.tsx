import React, { useState } from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { PrimaryButton } from '../../inputs';
import { Drawer } from '.';
import { Box } from '../../data';

export default {
  title: 'Navigation/Drawer',
  component: Drawer,
} as Meta;

export const Example: Story = ({ ...rest }) => {
  let [open, setOpen] = useState(false);
  return (
    <>
      <Box display="grid" height="100vh" style={{ placeContent: 'center' }}>
        <PrimaryButton onClick={() => setOpen(!open)}>Open Drawer</PrimaryButton>
      </Box>
      <Drawer open={open} handleClose={() => setOpen(false)} {...rest}>
        <Box p="4">This is a drawer</Box>
      </Drawer>
    </>
  );
};
