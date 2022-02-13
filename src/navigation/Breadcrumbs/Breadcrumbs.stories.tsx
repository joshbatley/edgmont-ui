import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { ChevronRightIcon } from 'feedback/Icons/Outline';
import { Breadcrumbs } from '.';

export default {
  title: 'Navigation/Breadcrumbs',
  component: Breadcrumbs,
  parameters: {
    backgrounds: {
      default: 'White',
    },
  },
} as Meta;

export const Default: Story = ({ ...rest }) => (
  <Breadcrumbs {...rest}>
    <a href="#">Edgmont</a>
    <a href="#">Navigation</a>
    <a href="#">Breadcrumbs</a>
  </Breadcrumbs >
);

export const CustomDividers: Story = ({ ...rest }) => (
  <Breadcrumbs dividerIcon={<ChevronRightIcon />} {...rest}>
    <a href="#">With</a>
    <a href="#">A</a>
    <a href="#">Custom</a>
  </Breadcrumbs >
);

export const CollaspsedBreadcrumbs: Story = ({ ...rest }) => (
  <Breadcrumbs maxItems={4} {...rest}>
    <a href="#">With hidden</a>
    <a href="#">now</a>
    <a href="#">you</a>
    <a href="#">see</a>
    <a href="#">me</a>
    <a href="#">Items</a>
  </Breadcrumbs >
);

