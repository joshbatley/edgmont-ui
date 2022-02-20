import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { ClickableElement } from '../ClickableElement';

export default {
  title: 'Inputs/Buttons/ClickableElement',
  component: ClickableElement,
  args: {
    children: 'Click me',
  },
} as Meta;

export const Example: Story = ({ children, ...rest }) => (
  <div>You can click this and it will work <ClickableElement {...rest}>{children}</ClickableElement>. No really</div>
);

