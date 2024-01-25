import React from 'react';
import { StoryObj } from '@storybook/react';
import { Panel, UploadButton as UB, UploadZone as UZ } from '@edgmont-ui/react';

export default {
  title: 'Inputs/Upload',
  component: UZ,
};

export const UploadZone: StoryObj<typeof UZ> = {
  render: ({ ...rest }) => (
    <Panel px="3" py="2" width="50%">
      <UZ {...rest} />
    </Panel>
  ),
};

export const UploadButton: StoryObj<typeof UB> = {
  render: ({ ...rest }) => <UB {...rest} />,
};
