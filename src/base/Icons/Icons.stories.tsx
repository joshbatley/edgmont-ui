import React from 'react';
import { Solid as Icons, Outline as IconsOutline } from './';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';

function camelCaseToDash(str: string) {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

const IconWrapper = ({ IconArr }: { IconArr: Record<string, any> }) => (
  <div className="grid gap-8 text-center text-xs leading-4 col-start-1 row-start-2 grid-cols-5 text-gray-500">
    {Object.entries(IconArr).map(([Name, Icon], idx) =>
      <div key={`${Name}-${idx}`}>
        <div className="border-gray-300 border rounded-md mb-3 h-24 flex justify-center items-center">
          <Icon className="h-5" />
        </div>
        <div className="">{camelCaseToDash(Name)}</div>
      </div>,
    )}
  </div>
);

const IconsComp = () => (<IconWrapper IconArr={Icons} />);
const IconsOutlineComp = () => (<IconWrapper IconArr={IconsOutline} />);

export const Solid: Story = () => (<IconsComp />);
export const Outline: Story = () => (<IconsOutlineComp />);

export default {
  title: 'Base/Icons',
  component: IconsComp,
} as Meta;
