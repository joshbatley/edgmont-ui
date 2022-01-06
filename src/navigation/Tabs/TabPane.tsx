import classNames from 'classnames';
import React from 'react';
import { Tab, TabVarient } from '.';

export type TabPaneProps = {
  selected?: boolean;
  value?: string;
  tab?: React.ReactNode;
  children?: React.ReactNode;
  key: string | number;
} & React.ComponentPropsWithoutRef<'div'>;

export type TabPaneListProps = {
  tabs: Tab[];
  selected: string;
  type: TabVarient;
};

export const TabPane: React.FC<TabPaneProps> = ({ children, selected, ...rest }) =>
  selected ? <div className="px-4 py-5" {...rest}>{children}</div> : null;


export const TabPaneList: React.FC<TabPaneListProps> = ({ tabs, selected, type }) => (
  <div className={classNames(type === 'card' && 'bg-white border rounded-b')}>
    {tabs.map(({ key, children, ...rest }) => (
      <TabPane
        selected={selected === key}
        key={key} {...rest}
      >{children}</TabPane>
    ))}
  </div>
);

