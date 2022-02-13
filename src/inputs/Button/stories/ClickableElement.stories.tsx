import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { colorSelectWithWhite, sizeSelect } from 'storybook-helpers/presets';
import { ClickableElement } from '../ClickableElement';

export default {
  title: 'Inputs/Button/ClickableElement',
  component: ClickableElement,
  args: {
    children: 'Click me',
  },
  argTypes: {
    size: sizeSelect,
    color: colorSelectWithWhite,
  },
} as Meta;

export const Default: Story = ({ children, ...rest }) => (
  <div>You can click this and it will work <ClickableElement {...rest}>{children}</ClickableElement>. No really</div>
);

