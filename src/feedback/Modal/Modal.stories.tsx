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
} as Meta;

export const Default: Story = ({ ...rest }) => {
  let [open, setOpen] = useState(false);

  return (
    <>
      <OutlineButton onClick={() => setOpen(!open)}>Open</OutlineButton>
      <Modal open={open} title="This is a modal header" handleClose={() => setOpen(!open)} {...rest}>
        <Panel className="px-2 py-2 space-y-10 flex flex-col">
          <Text>This is the dialog body, it can contian anything</Text>
          <TextField placeholder="Like a form" />
          <PrimaryButton color="green">Or a button</PrimaryButton>
          <Chip color="red">Or even a chip</Chip>
        </Panel>
      </Modal >
    </>
  );
};
