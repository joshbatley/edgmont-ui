import { Box } from '../../data';
import React, { useState } from 'react';
import { TabCardItems } from './TabCardItems';
import { TabNavItems } from './TabNavItems';
import { TabPaneList } from './TabPane';

const parseChildrenToTabs = (children: React.ReactNode): Tab[] => {
  return React.Children.toArray(children).map((node) => {
    if (!React.isValidElement(node)) {
      return null;
    }
    let key = node.props.value || node.key;
    return {
      key,
      ...node.props,
      node,
    };
  });
};

export const Tabs: React.FC<TabsProps> = ({ children: childrenProp, type = 'default', value }) => {
  let tabs = parseChildrenToTabs(childrenProp);
  let [selected, setSelected] = useState(value || tabs[0].key);
  return (
    <Box width="100%">
      {type === 'card' ? (
        <TabCardItems tabs={tabs} selected={selected} onChange={setSelected} />
      ) : (
        <TabNavItems tabs={tabs} selected={selected} onChange={setSelected} />
      )}
      <TabPaneList type={type} tabs={tabs} selected={selected} />
    </Box>
  );
};

