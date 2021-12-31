import React, { useState } from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { Modal } from './';
import { OutlineButton, PrimaryButton, TextField } from 'inputs';
import { Chip, Panel, Text } from 'base';

export default {
  title: 'Feedback/Modal',
  component: Modal,
} as Meta;

const Wrapper = ({ Comp, children, ...rest }: any) => {
  let [open, setOpen] = useState(false);
  return (
    <>
      <OutlineButton onClick={() => setOpen(!open)}>open</OutlineButton>
      {open && (
        <Comp handleClose={() => setOpen(!open)} {...rest}>
          {children}
        </Comp>
      )}
    </>
  );
};

export const Default: Story = ({ ...rest }) => (
  <Wrapper Comp={Modal} title="This is a modal header" {...rest}>
    <Panel className="px-2 py-2 space-y-10 flex flex-col">
      <Text>This is the dialog body, it can contian anything</Text>
      <TextField placeholder="Like a form" />
      <PrimaryButton color="green">Or a button</PrimaryButton>
      <Chip color="red">Or even a chip</Chip>
    </Panel>
  </Wrapper >
);
