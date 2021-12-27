import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { TextField } from '../TextField';
import { LockClosedIcon, CodeIcon } from 'base/Icons/Solid';
import { ClickableElement } from 'inputs/Button';
import { Password as PasswordComp } from '../Password';
import { Text } from 'base/Text';
import { sizeSelect } from 'storybook-helpers/presets';

export default {
  title: 'inputs/TextField/Props',
  component: TextField,
  args: {
    placeholder: 'My input',
  },
  argTypes: {
    size: sizeSelect,
  },
} as Meta;

const Before = ({ ...rest }) => (<ClickableElement onClick={() => alert('boo')} {...rest}>https://</ClickableElement>);
const After = ({ ...rest }) => (<Text {...rest}>.com</Text>);

export const Default: Story = ({ ...rest }) => <TextField {...rest} />;

export const PrefixAndSuffix: Story = ({ ...rest }) => (
  <div className="space-y-2">
    <TextField prefixIcon={<LockClosedIcon width={16} />} {...rest} />
    <TextField suffixIcon={<CodeIcon width={16} />} {...rest} />
    <TextField prefixIcon={<LockClosedIcon width={16} />} suffixIcon={<CodeIcon width={16} />} {...rest} />
  </div>
);

export const Addons: Story = ({ ...rest }) => (
  <div className="space-y-2">
    <TextField before={<Before />} {...rest} />
    <TextField after={<After />} {...rest} />
    <TextField before={<Before />} after={<After />} {...rest} />
  </div>
);

export const Password: Story = ({ ...rest }) => <PasswordComp {...rest} />;
