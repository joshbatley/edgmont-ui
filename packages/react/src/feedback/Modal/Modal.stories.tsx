import React, { useState } from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { OutlineButton, PrimaryButton, TextField } from 'inputs';
import { Panel, Text } from 'data';
import { Chip } from 'feedback';
import { Modal } from '.';

export default {
  title: 'Feedback/Modal',
  component: Modal,
  args: {
    title: 'This is a modal header',
  },
} as Meta;

export const Example: Story = ({ title, children, ...rest }) => {
  let [open, setOpen] = useState(false);

  return (
    <>
      <OutlineButton onClick={() => setOpen(!open)}>Open</OutlineButton>
      <Modal open={open} title={title} handleClose={() => setOpen(!open)} {...rest}>
        <Panel spaceYBetween="10" p="2" display="flex" flexDirection="column">
          <Text>This is the dialog body, it can contian anything</Text>
          <TextField placeholder="Like a form" />
          <PrimaryButton color="success">Or a button</PrimaryButton>
          <Chip color="warning">Or even a chip</Chip>
        </Panel>
      </Modal>
    </>
  );
};
