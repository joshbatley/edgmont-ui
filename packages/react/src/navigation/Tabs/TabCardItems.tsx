import React from 'react';
import clsx from 'clsx';
import { ClickableElement } from 'inputs';
import { Scrollable } from 'utils';

export type TabCardItemProps = {
  selected?: boolean;
  onClick: () => void;
  children: React.ReactNode;
  color?: ColorsLegacy;
};

const clasess: Record<ColorsLegacy, string> = {
  primary: 'bg-primary-600',
  gray: 'bg-gray-600',
  green: 'bg-green-600',
  lime: 'bg-lime-600',
  red: 'bg-red-600',
  yellow: 'bg-yellow-600',
  blue: 'bg-blue-600',
  purple: 'bg-purple-600',
  orange: 'bg-orange-600',
  pink: 'bg-pink-600',
};

export const TabCardItem: React.FC<TabCardItemProps> = ({ children, selected, onClick, color = 'primary' }) => (
  <ClickableElement className={clsx('px-5 py-3 rounded-t rounded-b-none overflow-hidden focus:ring-0 border relative z-10 snap-start border-b-0', selected ? 'bg-white' : 'bg-gray-50')} onClick={onClick}>
    {children}
    {selected && (
      <div className={clsx('absolute left-0 bottom-0 h-[2px] w-full', clasess[color])} ></div>
    )
    }
  </ClickableElement >
);

export type TabCardItemsProps = {
  tabs: Tab[];
  selected: string | number;
  onChange: any;
  color?: ColorsLegacy;
};

export const TabCardItems: React.FC<TabCardItemsProps> = ({ tabs, selected, onChange, color = 'primary' }) => (
  <Scrollable>
    <div className="space-x-1">
      {tabs.map(({ tab, key }) => (
        <TabCardItem
          color={color}
          key={key}
          selected={selected === key}
          onClick={() => onChange(key)}
        >{tab}</TabCardItem>
      ))}
    </div>
  </Scrollable >
);
