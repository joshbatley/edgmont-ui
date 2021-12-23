import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';

import { ClickableElement } from '../ClickableElement';
import { colorSelectWithWhite, sizeSelect } from 'storybook-helpers/presets';

export default {
  title: 'inputs/Button/ClickableElement',
  component: ClickableElement,
  args: {
    children: 'Click me',
  },
  argTypes: {
    size: sizeSelect,
    color: colorSelectWithWhite,
  },
} as Meta;

export const Default: Story = ({ children, ...args }) => (
  <div>You can click this and it will work <ClickableElement {...args}>{children}</ClickableElement>. No really</div>
);

