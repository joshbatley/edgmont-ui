import React, { useState } from 'react';
import { StoryObj } from '@storybook/react';
import {
  Chip,
  Modal,
  OutlineButton,
  Panel,
  PrimaryButton,
  TextComp,
  TextField,
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
          <Panel
            width="400px"
            spaceYBetween="10"
            pt="2"
            pb="4"
            px="2"
            display="flex"
            flexDirection="column"
          >
            <TextComp>This is the dialog body, it can contian anything</TextComp>
            <TextField placeholder="Like a form" />
            <PrimaryButton color="success">Or a button</PrimaryButton>
            <Chip color="warning">Or even a chip</Chip>
          </Panel>
        </Modal>
      </>
    );
  },
};
