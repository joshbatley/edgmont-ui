import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { LockClosedIcon, EyeIcon } from '@heroicons/react/24/solid';
import { ClickableElement } from 'inputs';
import { Text } from 'data';
import { TextField } from '..';

export default {
  title: 'Inputs/TextField',
  component: TextField,
  args: {
    placeholder: 'My input',
  },
} as Meta;

const Before = ({ ...rest }) => (<ClickableElement onClick={() => alert('boo')} {...rest}>https://</ClickableElement>);
const After = ({ ...rest }) => (<Text {...rest}>.com</Text>);

export const Errored: Story = ({ ...rest }) => (
  <div className="space-y-2">
    <TextField error {...rest} />
    <TextField error prefiXMarkIcon={<LockClosedIcon width={16} />} {...rest} />
    <TextField error suffiXMarkIcon={<EyeIcon width={16} />} {...rest} />
    <TextField error before={<Before />} {...rest} />
    <TextField error after={<After />} {...rest} />
    <TextField error before={<Before />} after={<After />} {...rest} />
  </div>
);
export const Disabled: Story = ({ ...rest }) => (
  <div className="space-y-2">
    <TextField disabled {...rest} />
    <TextField disabled prefiXMarkIcon={<LockClosedIcon width={16} />} {...rest} />
    <TextField disabled suffiXMarkIcon={<EyeIcon width={16} />} {...rest} />
    <TextField disabled before={<Before />} {...rest} />
    <TextField disabled after={<After />} {...rest} />
    <TextField disabled before={<Before />} after={<After />} {...rest} />
  </div>
);
