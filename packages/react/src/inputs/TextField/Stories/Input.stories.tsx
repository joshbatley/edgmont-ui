import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { sizeSelect } from 'storybook-helpers/presets';
import { LockClosedIcon, CodeBracketIcon } from '@heroicons/react/24/solid';
import { ClickableElement } from 'inputs';
import { Text } from 'data';
import { Password as PasswordComp, TextField } from '..';

export default {
  title: 'Inputs/TextField',
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

export const Example: Story = ({ ...rest }) => <TextField {...rest} />;

export const PrefixAndSuffix: Story = ({ ...rest }) => (
  <div className="space-y-2">
    <TextField prefiXMarkIcon={<LockClosedIcon width={16} />} {...rest} />
    <TextField suffiXMarkIcon={<CodeBracketIcon width={16} />} {...rest} />
    <TextField prefiXMarkIcon={<LockClosedIcon width={16} />} suffiXMarkIcon={<CodeBracketIcon width={16} />} {...rest} />
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
