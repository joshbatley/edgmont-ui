import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { TwoColumns } from '.';

export default {
  title: 'Layout/TwoColumns',
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
} as Meta;

let sidebar = <div className="bg-purple-700 border-r h-screen">123</div>;

export const Example: Story = () => (
  <TwoColumns sideNav={sidebar} className='bg-white'>
    <div className="bg-white border-r h-screen">123</div>
  </TwoColumns>
);

