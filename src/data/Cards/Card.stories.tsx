import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { Card, CardContent, CardMedia } from '.';

export default {
  title: 'Data/Card',
  component: Card,
} as Meta;

export const Default: Story = ({ ...rest }) => (
  <Card style={{ maxWidth: 300 }} {...rest}>
    <CardMedia
      as="img"
      alt="green iguana"
      src="https://mui.com/static/images/cards/contemplative-reptile.jpg"
    />
    <CardContent>
      “Tailwind CSS is the only framework that I've seen scale
      on large teams. Its easy to customize, adapts to any design,
      and the build size is tiny.”
    </CardContent>
  </Card>
);

