import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { severitySelect } from 'storybook-helpers/presets';
import { SunIcon } from 'feedback/Icons/Solid';
import { Alert } from '.';

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

export const Example: Story = ({ ...rest }) => (
  <Alert {...rest} />
);

export const Variations: Story = ({ ...rest }) => (
  <div className="space-y-4">
    <Alert {...rest} severity='error' />
    <Alert {...rest} severity='warning' />
    <Alert {...rest} severity='info' />
    <Alert {...rest} severity='success' />
    <Alert {...rest} dark />
    <Alert {...rest} />
  </div>
);
Variations.argTypes = {
  severity: { table: { disable: true } },
  dark: { table: { disable: true } },
  icon: { table: { disable: true } },
  withClose: { table: { disable: true } },
  className: { table: { disable: true } },
};

export const WithIcon: Story = ({ ...rest }) => (
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

