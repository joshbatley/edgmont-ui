import React, { useState } from 'react';
import { StoryObj } from '@storybook/react';
import {
  Modal,
  OutlineButton,
  Box,
  PrimaryButton,
  TextComp,
  TextField,
  Label,
} from '@edgmont-ui/react';

export default {
  title: 'Feedback/Modal',
  component: Modal,
  args: {
    title: 'This is a modal header',
  },
};

export const Example: StoryObj<typeof Modal> = {
  render: ({ title, children, ...rest }) => {
    let [open, setOpen] = useState(false);

    return (
      <>
        <OutlineButton onClick={() => setOpen(!open)}>Open</OutlineButton>
        <Modal
          {...rest}
          open={open}
          title={title}
          handleClose={() => setOpen(!open)}
        >
          <Box
            width="400px"
            spaceYBetween="3"
            pt="0"
            pb="4"
            px="4"
            display="flex"
            flexDirection="column"
          >
            <TextComp color="mutedForeground">Make changes to your profile here. Click save when you're done.</TextComp>
            <Label value="Email">
              <TextField placeholder="Email" />
            </Label>
            <Label value="Password">
              <TextField placeholder="password" type="password" />
            </Label>
            <PrimaryButton>Update</PrimaryButton>
          </Box>
        </Modal>
      </>
    );
  },
};
