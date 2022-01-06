import React, { useRef, forwardRef, useEffect, useState } from 'react';
import classNames from 'classnames';
import { ClickableElement } from 'inputs';
import { Tab } from '.';
import { Scrollable } from 'base/Scrollable';
import { applyColor } from 'shared/colorpicker';

export type TabNavItemProps = {
  onClick: () => void;
  children: React.ReactNode;
};

const TabClasses = 'px-4 py-3 rounded-none relative overflow-hidden first-of-type:rounded-l last-of-type:rounded-r-md focus:ring-0';

export const TabNavItem = forwardRef<HTMLButtonElement, TabNavItemProps>(({ children, onClick }, ref) => (
  <ClickableElement className={classNames(TabClasses)} onClick={onClick} ref={ref}>
    {children}
  </ClickableElement>
));

export type TabNavItemsProps = {
  tabs: Tab[];
  selected: string;
  onChange: any;
  accentColor?: Colors;
};

export const TabNavItems: React.FC<TabNavItemsProps> = ({ tabs, selected, onChange, accentColor = 'blue' }) => {
  let ref = useRef<HTMLButtonElement>(null);
  let [styles, setStyles] = useState({ width: 0, left: 0 });
  let color = applyColor(accentColor, '600', 'bg');

  useEffect(() => {
    setStyles({
      width: ref.current?.offsetWidth || 0,
      left: (ref.current?.offsetLeft || 0) - 20,
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
        <div className={classNames(color, 'h-1 relative transition-all')} style={{ ...styles }} />
      </div>
    </Scrollable>
  );
};
