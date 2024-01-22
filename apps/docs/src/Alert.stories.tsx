import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { SunIcon } from '@heroicons/react/24/solid';
import { Alert } from '@edgmont-ui/react';
import { Box } from '@edgmont-ui/react';
import { severitySelect } from './presets';

export default {
  title: 'Feedback/Alert',
  component: Alert,
  args: {
    title: 'Alert title',
  },
  argTypes: {
    severity: severitySelect,
  },
};


export const Example: StoryObj<typeof Alert> = {
  render: ({ ...rest }) => (
    <Alert {...rest} />
  )
}


export const Variations: StoryObj<typeof Alert> = {
  argTypes: {
    severity: { table: { disable: true } },
    icon: { table: { disable: true } },
    withClose: { table: { disable: true } },
  },
  render: ({ ...rest }) => (
    <div>
      <Box mt="2">
        <Alert {...rest} severity='error' />
      </Box>
      <Box mt="2">
        <Alert {...rest} severity='warning' />
      </Box>
      <Box mt="2">
        <Alert {...rest} severity='info' />
      </Box>
      <Box mt="2">
        <Alert {...rest} severity='success' />
      </Box>
      <Box mt="2">
        <Alert {...rest} />
      </Box>
    </div>
  )
}

export const WithIcon: StoryObj<typeof Alert> = {
  render: ({ ...rest }) => (
    <Alert icon={<SunIcon height={22} width={22} />} {...rest} />
  )
}

export const OverriderDefaultIcon: StoryObj<typeof Alert> = {
  render: ({ ...rest }) => (
    <Alert severity='error' icon={<SunIcon height={22} width={22} />} {...rest} />
  )
}

export const WithMessage: StoryObj<typeof Alert> = {
  render: ({ ...rest }) => (
    <Alert withClose={() => { }} {...rest}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse euismod, mauris.
    </Alert>
  )
}

export const WithDelete: StoryObj<typeof Alert> = {
  render: ({ ...rest }) => (
    <Alert icon={<SunIcon height={22} width={22} />} {...rest} withClose={() => alert('delete')} />
  )
}

