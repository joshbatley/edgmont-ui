import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { UploadButton, UploadZone } from '.';
import { Panel } from 'base';

export default {
  title: 'Inputs/Upload',
  component: UploadZone,
} as Meta;

export const Defualt: Story = ({ ...rest }) => (
  <Panel className="px-3 py-2 w-1/2">
    <UploadZone {...rest} />
  </Panel>
);


export const Button: Story = ({ ...rest }) => (
  <UploadButton {...rest} />
);
