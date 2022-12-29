import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { ThreeColumns } from '.';
import { Box } from '../../data';

export default {
  title: 'Layout/ThreeColumns',
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
} as Meta;

let sidebar = <Box bg="primary" borderRight="background2.1" height="100vh">123</Box>;
let mainNav = <Box bg="error" borderRight="background2.1" height="100vh">123</Box>;

export const Example: Story = () => (
  <ThreeColumns sideNav={sidebar} mainNav={mainNav}>
    <Box bg="background.1" borderRight="background2.1" height="100vh">123</Box>
  </ThreeColumns>
);

