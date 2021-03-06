import React, { useState } from 'react';
import { TabNavItems, TabPaneList, TabCardItems } from '.';

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

export const Tabs: React.FC<TabsProps> = ({ children: childrenProp, type = 'default', value, color = 'primary' }) => {
  let tabs = parseChildrenToTabs(childrenProp);
  let [selected, setSelected] = useState(value || tabs[0].key);
  return (
    <div className="w-full">
      {type === 'card' ? (
        <TabCardItems tabs={tabs} selected={selected} onChange={setSelected} color={color} />
      ) : (
        <TabNavItems tabs={tabs} selected={selected} onChange={setSelected} color={color} />
      )}
      <TabPaneList type={type} tabs={tabs} selected={selected} />
    </div>
  );
};

