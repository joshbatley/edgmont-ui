import React, { Ref } from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { Menu, MenuItem } from '.';
import { useState } from 'react';
import { ClickableElement } from 'inputs';

export default {
  title: 'Navigation/Menu',
  component: Menu,
} as Meta;

export const Default: Story = ({ }) => {
  let [element, setElement] = useState(null);
  let [open, setOpen] = useState(false);
  return (
    <>
      <ClickableElement ref={setElement as Ref<HTMLButtonElement>} onClick={() => setOpen(!open)}>
        Open Menu
      </ClickableElement>
      <Menu handleClose={() => setOpen(false)} isOpen={open} itemRef={element}>
        <MenuItem onClick={() => alert('item 1')}>Item 1</MenuItem>
        <MenuItem onClick={() => alert('item 2')}>Item 2</MenuItem>
        <MenuItem onClick={() => alert('item 3')}>Item 3</MenuItem>
      </Menu>
    </>
  );
};

