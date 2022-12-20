import React from 'react';
import { Box } from 'data';

export type TabPaneProps = {
  selected?: boolean;
  value?: string;
  tab?: React.ReactNode;
  children?: React.ReactNode;
  key: string | number;
} & React.ComponentPropsWithoutRef<'div'>;

export type TabPaneListProps = {
  tabs: Tab[];
  selected: string | number;
  type: TabVarient;
};

export const TabPane: React.FC<TabPaneProps> = ({ children, selected, ...rest }) =>
  selected ? <Box px="4" py="5" {...rest}>{children}</Box> : null;

export const TabPaneList: React.FC<TabPaneListProps> = ({ tabs, selected, type }) => {
  let isCard = type === 'card';
  return (
    <Box bg={isCard ? 'background.0' : ''} border={isCard ? 'background2.1' : ''} borderBottomLeftRadius={isCard ? '2' : '0'} borderBottomRightRadius={isCard ? '2' : '0'}>
      {tabs.map(({ key, children, ...rest }) => (
        <TabPane
          selected={selected === key}
          key={key} {...rest}
        >{children}</TabPane>
      ))}
    </Box>
  );
};
