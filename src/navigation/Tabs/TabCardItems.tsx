import React from 'react';
import classNames from 'classnames';
import { ClickableElement } from 'inputs';
import { Tab } from '.';
import { Scrollable } from 'base/Scrollable';

export type TabCardItemProps = {
  selected?: boolean;
  onClick: () => void;
  children: React.ReactNode;
};

const TabClasses = 'px-5 py-3 rounded-t rounded-b-none relative overflow-hidden focus:ring-0 border relative z-10 snap-start border-b-0';

export const TabCardItem: React.FC<TabCardItemProps> = ({ children, selected, onClick }) => (
  <ClickableElement className={classNames(TabClasses, selected ? 'bg-white ' : 'bg-gray-50')} onClick={onClick}>
    {children}
    {selected && (
      <div className="absolute left-0 bottom-0 h-[2px] w-full bg-blue-500"></div>
    )}
  </ClickableElement>
);

export type TabCardItemsProps = {
  tabs: Tab[];
  selected: string;
  onChange: any;
};

export const TabCardItems: React.FC<TabCardItemsProps> = ({ tabs, selected, onChange }) => {
  return (
    <Scrollable>
      <div className="space-x-1">
        {tabs.map(({ tab, key }) => (
          <TabCardItem key={key} selected={selected === key} onClick={() => onChange(key)}>{tab}</TabCardItem>
        ))}
      </div>
    </Scrollable >
  );
};

