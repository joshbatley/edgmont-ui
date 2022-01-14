import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { Alert } from '.';
import { severitySelect } from 'storybook-helpers/presets';
import { SunIcon } from 'base/Icons/Solid';

export default {
  title: 'Feedback/Alert',
  component: Alert,
  args: {
    title: 'Alert title',
  },
  argTypes: {
    severity: severitySelect,
  },
} as Meta;

export const Default: Story = ({ ...rest }) => (
  <Alert {...rest} />
);

export const All: Story = ({ ...rest }) => (
  <div className="space-y-4">
    <Alert {...rest} severity='error' title="This is an error message!" />
    <Alert {...rest} severity='warning' title="This is a warning message!" />
    <Alert {...rest} severity='info' title="This is an information message!" />
    <Alert {...rest} severity='success' title="This is a success message!" />
    <Alert {...rest} dark />
    <Alert {...rest} />
  </div>
);

export const AddIcon: Story = ({ ...rest }) => (
  <Alert icon={<SunIcon height={22} width={22} />} {...rest} />
);

export const OverriderDefaultIcon: Story = ({ ...rest }) => (
  <Alert severity='error' icon={<SunIcon height={22} width={22} />} {...rest} />
);

export const WithMessage: Story = ({ ...rest }) => (
  <Alert withClose={() => { }} {...rest}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse euismod, mauris.
  </Alert>
);

export const WithDelete: Story = ({ ...rest }) => (
  <Alert icon={<SunIcon height={22} width={22} />} {...rest} withClose={() => alert('delete')} />
);

