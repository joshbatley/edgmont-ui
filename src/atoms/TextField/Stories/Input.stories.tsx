import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { TextField } from '../TextField';
import { LockClosedIcon, CodeIcon } from 'atoms/Icons/Solid';
import { ClickableElement } from 'atoms/Button';
import { Password as PasswordComp } from '../Password';
import { Text } from 'atoms/Text';

export default {
  title: 'Atoms/Form/TextField/Props',
  component: TextField,
  args: {
    placeholder: 'My input',
  },
  argTypes: {
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'select' },
    },
  },
} as Meta;

const Before = ({ ...args }) => (<ClickableElement onClick={() => alert('boo')} {...args}>https://</ClickableElement>);
const After = ({ ...args }) => (<Text {...args}>.com</Text>);

export const Default: Story = ({ ...args }) => <TextField {...args} />;

export const PrefixAndSuffix: Story = ({ ...args }) => (
  <div className="space-y-2">
    <TextField prefixIcon={<LockClosedIcon width={16} />} {...args} />
    <TextField suffixIcon={<CodeIcon width={16} />} {...args} />
    <TextField prefixIcon={<LockClosedIcon width={16} />} suffixIcon={<CodeIcon width={16} />} {...args} />
  </div>
);

export const Addons: Story = ({ ...args }) => (
  <div className="space-y-2">
    <TextField before={<Before />} {...args} />
    <TextField after={<After />} {...args} />
    <TextField before={<Before />} after={<After />} {...args} />
  </div>
);

export const Password: Story = ({ ...args }) => <PasswordComp {...args} />;
