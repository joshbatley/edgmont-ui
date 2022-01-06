import React, { useState } from 'react';
import { Tab, TabNavItems, TabPaneList, TabCardItems, TabVarient } from '.';

export type TabsProps = {
  value?: string | number;
  type?: TabVarient;
};

function parseChildrenToTabs(children: React.ReactNode): Tab[] {
  return React.Children.toArray(children).map((node, idx) => {
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
}

export const Tabs: React.FC<TabsProps> = ({ children: childrenProp, type = 'default', value }) => {
  console.log(value);
  let tabs = parseChildrenToTabs(childrenProp);
  let [selected, setSelected] = useState(value || tabs[0].key);
  return (
    <div className="w-full">
      {type === 'card' ? (
        <TabCardItems tabs={tabs} selected={selected} onChange={setSelected} />
      ) : (
        <TabNavItems tabs={tabs} selected={selected} onChange={setSelected} />
      )}
      <TabPaneList type={type} tabs={tabs} selected={selected} />
    </div>
  );
};

