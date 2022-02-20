import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { Image } from '.';
import { PhotographIcon } from 'feedback/Icons/Solid';

export default {
  title: 'Data/Image',
  component: Image,
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
} as Meta;


const fallback = (
  <div className="w-12 h-12 flex items-center justify-center rounded text-gray-500 bg-white">
    <PhotographIcon width={30} height={30} />
  </div>
);

export const Example: Story = () => (
  <div className="space-y-4">
    <div>
      Broken Image with fallback
      <Image width="200" height="200" fallback={fallback} src="https://brokenUrl.xyz/NotAImage.png" />
    </div>
    <div>
      Working Image with fallback
      <Image width="200" height="200" fallback={fallback} src="https://mui.com/static/images/cards/contemplative-reptile.jpg" />
    </div>
  </div >
);
