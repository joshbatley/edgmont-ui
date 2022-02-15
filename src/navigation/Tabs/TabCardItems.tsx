import React from 'react';
import clsx from 'clsx';
import { applyColor } from 'shared/colorpicker';
import { ClickableElement } from 'inputs';
import { Scrollable } from 'utils';

export type TabCardItemProps = {
  selected?: boolean;
  onClick: () => void;
  children: React.ReactNode;
  accentColor?: Colors;
};

export const TabCardItem: React.FC<TabCardItemProps> = ({ children, selected, onClick, accentColor = 'blue' }) => {
  let color = applyColor(accentColor, '600', 'bg');
  return (
    <ClickableElement className={clsx('px-5 py-3 rounded-t rounded-b-none overflow-hidden focus:ring-0 border relative z-10 snap-start border-b-0', selected ? 'bg-white' : 'bg-gray-50')} onClick={onClick}>
      {children}
      {selected && (
        <div className={clsx('absolute left-0 bottom-0 h-[2px] w-full', color)} ></div>
      )
      }
    </ClickableElement >
  );
};

export type TabCardItemsProps = {
  tabs: Tab[];
  selected: string | number;
  onChange: any;
  accentColor?: Colors;
};

export const TabCardItems: React.FC<TabCardItemsProps> = ({ tabs, selected, onChange, accentColor = 'blue' }) => (
  <Scrollable>
    <div className="space-x-1">
      {tabs.map(({ tab, key }) => (
        <TabCardItem
          accentColor={accentColor}
          key={key}
          selected={selected === key}
          onClick={() => onChange(key)}
        >{tab}</TabCardItem>
      ))}
    </div>
  </Scrollable >
);
