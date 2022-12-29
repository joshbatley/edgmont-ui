import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { Panel } from '../../data';
import { UploadButton as UB, UploadZone as UZ } from '.';

export default {
  title: 'Inputs/Upload',
  component: UZ,
} as Meta;

export const UploadZone: Story = ({ ...rest }) => (
  <Panel px="3" py="2" width="50%">
    <UZ {...rest} />
  </Panel>
);

export const UploadButton: Story = ({ ...rest }) => (
  <UB {...rest} />
);
