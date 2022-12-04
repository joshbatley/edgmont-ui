import React, { useRef, forwardRef, useEffect, useState } from 'react';
import clsx from 'clsx';
import { ClickableElement } from 'inputs';
import { Scrollable } from 'utils';

export type TabNavItemProps = {
  onClick: () => void;
  children: React.ReactNode;
};

export const TabNavItem = forwardRef<HTMLButtonElement, TabNavItemProps>(({ children, onClick }, ref) => (
  <ClickableElement className='px-4 py-3 rounded-none relative overflow-hidden first-of-type:rounded-l last-of-type:rounded-r-md focus:ring-0' onClick={onClick} ref={ref}>
    {children}
  </ClickableElement>
));

export type TabNavItemsProps = {
  tabs: Tab[];
  selected: string | number;
  onChange: any;
  color?: ColorsLegacy;
};

const classes: Record<ColorsLegacy, string> = {
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

export const TabNavItems: React.FC<TabNavItemsProps> = ({ tabs, selected, onChange, color = 'primary' }) => {
  let ref = useRef<HTMLButtonElement>(null);
  let [styles, setStyles] = useState({ width: 0, left: 0 });

  useEffect(() => {
    setStyles({
      width: ref.current?.offsetWidth || 0,
      left: (ref.current?.offsetLeft || 0) - 16,
    });
  }, [selected]);

  return (
    <Scrollable>
      <div className="border-b">
        {tabs.map(({ tab, key }) => (
          <TabNavItem
            key={key}
            ref={selected === key ? ref : null}
            onClick={() => onChange(key)}
          >{tab}</TabNavItem>
        ))}
        <div className={clsx(classes[color], 'h-1 relative transition-all')} style={{ ...styles }} />
      </div>
    </Scrollable>
  );
};

