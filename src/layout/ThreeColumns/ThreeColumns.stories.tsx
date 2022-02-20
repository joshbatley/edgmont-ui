import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { ThreeColumns } from '.';

export default {
  title: 'Layout/ThreeColumns',
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
} as Meta;

let sidebar = <div className="bg-purple-700 border-r h-screen">123</div>;
let mainNav = <div className="bg-blue-700 border-r h-screen">123</div>;

export const Example: Story = () => (
  <ThreeColumns sideNav={sidebar} mainNav={mainNav} className='bg-white'>
    <div className="bg-white border-r h-screen">123</div>
  </ThreeColumns>
);

