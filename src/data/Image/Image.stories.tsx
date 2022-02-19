import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { Image } from '.';
import { PhotographIcon } from 'feedback/Icons/Solid';

export default {
  title: 'Data/Image',
  component: Image,
} as Meta;


const fallback = (
  <div className="w-12 h-12 flex items-center justify-center rounded text-gray-500 bg-white">
    <PhotographIcon width={30} height={30} />
  </div>
);

export const Example: Story = ({ ...rest }) => (
  <div className="space-y-2">
    <Image width="200" height="200" fallback={fallback} src="https://brokenUrl.xyz/NotAImage.png" />
    <Image width="200" height="200" fallback={fallback} src="https://mui.com/static/images/cards/contemplative-reptile.jpg" />
  </div>
);
