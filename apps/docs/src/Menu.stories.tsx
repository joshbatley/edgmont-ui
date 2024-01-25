import React, { Ref, useState } from 'react';
import { StoryObj } from '@storybook/react';
import { ClickableElement, Menu, MenuItem } from '@edgmont-ui/react';

export default {
  title: 'Navigation/Menu',
  component: Menu,
};

export const Example: StoryObj = {
  render: ({ ...rest }) => {
    let [element, setElement] = useState(null);
    let [open, setOpen] = useState(false);
    return (
      <>
        <ClickableElement
          ref={setElement as Ref<HTMLButtonElement>}
          onClick={() => setOpen(!open)}
        >
          Open Menu
        </ClickableElement>
        <Menu
          handleClose={() => setOpen(false)}
          isOpen={open}
          itemRef={element}
          {...rest}
        >
          <MenuItem onClick={() => alert('item 1')}>Item 1</MenuItem>
          <MenuItem onClick={() => alert('item 2')}>Item 2</MenuItem>
          <MenuItem onClick={() => alert('item 3')}>Item 3</MenuItem>
        </Menu>
      </>
    );
  },
};
