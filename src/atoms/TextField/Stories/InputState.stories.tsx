import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { TextField } from '../TextField';
import { LockClosedIcon, EyeIcon } from 'atoms/Icons/Solid';
import { ClickableElement } from 'atoms/Button';
import { Text } from 'atoms/Text';

export default {
  title: 'Atoms/Controls/TextField/States',
  component: TextField,
  args: {
    placeholder: 'My input',
  },
} as Meta;

const Before = ({ ...args }) => (<ClickableElement onClick={() => alert('boo')} {...args}>https://</ClickableElement>);
const After = ({ ...args }) => (<Text {...args}>.com</Text>);

export const Error: Story = ({ ...args }) => (
  <div className="space-y-2">
    <TextField error {...args} />
    <TextField error prefixIcon={<LockClosedIcon width={16} />} {...args} />
    <TextField error suffixIcon={<EyeIcon width={16} />} {...args} />
    <TextField error before={<Before />} {...args} />
    <TextField error after={<After />} {...args} />
    <TextField error before={<Before />} after={<After />} {...args} />
  </div>
);
export const Disabled: Story = ({ ...args }) => (
  <div className="space-y-2">
    <TextField disabled {...args} />
    <TextField disabled prefixIcon={<LockClosedIcon width={16} />} {...args} />
    <TextField disabled suffixIcon={<EyeIcon width={16} />} {...args} />
    <TextField disabled before={<Before />} {...args} />
    <TextField disabled after={<After />} {...args} />
    <TextField disabled before={<Before />} after={<After />} {...args} />
  </div>
);
