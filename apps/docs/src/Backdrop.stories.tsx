import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { OutlineButton, PrimaryButton } from '@edgmont-ui/react';
import { Box, Text } from '@edgmont-ui/react';
import { Backdrop } from '@edgmont-ui/react';
import { colorSelect } from "./presets";

const meta: Meta = {
  title: 'Utils/Backdrop',
  component: Backdrop,
  args: {
    color: 'primary',
  },
  argTypes: {
    color: colorSelect,
  },
}

export default meta;

export const Default: StoryObj<typeof Backdrop> = {
  render: ({ ...rest }) => {
    let [open, setOpen] = useState(false);
    return (
      <>
        <OutlineButton onClick={() => setOpen(!open)}>open</OutlineButton>
        {open && (
          <Backdrop {...rest} onClick={() => setOpen(!open)}>
            <Box bg="background.0" height="40%" width="40%" display="flex" justifyContent="center" alignItems="center" flexDirection="column" spaceYBetween="5">
              <Text>Hit the close button, or Escape key or click the backdrop</Text>
              <PrimaryButton color="error" onClick={() => setOpen(!open)}>
                Close
              </PrimaryButton>
            </Box>
          </Backdrop>)
        }
      </>);
  }
}
