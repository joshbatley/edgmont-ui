import React from 'react';
import classNames from 'classnames';
import { ClickableElement } from 'inputs';
import { Tab } from '.';
import { Scrollable } from 'base/Scrollable';
import { applyColor } from 'utils/colorpicker';

export type TabCardItemProps = {
  selected?: boolean;
  onClick: () => void;
  children: React.ReactNode;
  accentColor?: Colors;
};

const TabClasses = 'px-5 py-3 rounded-t rounded-b-none relative overflow-hidden focus:ring-0 border relative z-10 snap-start border-b-0';

export const TabCardItem: React.FC<TabCardItemProps> = ({ children, selected, onClick, accentColor = 'blue' }) => {
  let color = applyColor(accentColor, '600', 'bg');
  return (
    <ClickableElement className={classNames(TabClasses, selected ? 'bg-white ' : 'bg-gray-50')} onClick={onClick}>
      {children}
      {selected && (
        <div className={classNames('absolute left-0 bottom-0 h-[2px] w-full', color)} ></div>
      )
      }
    </ClickableElement >
  );
};

export type TabCardItemsProps = {
  tabs: Tab[];
  selected: string;
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


