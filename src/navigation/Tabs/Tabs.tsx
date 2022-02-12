import React, { useState } from 'react';
import { Tab, TabVarient } from 'types/Tabs';
import { TabNavItems, TabPaneList, TabCardItems } from '.';

export type TabsProps = {
  value?: string | number;
  type?: TabVarient;
  accentColor?: Colors;
};

function parseChildrenToTabs(children: React.ReactNode): Tab[] {
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
}

export const Tabs: React.FC<TabsProps> = ({ children: childrenProp, type = 'default', value, accentColor = 'blue' }) => {
  let tabs = parseChildrenToTabs(childrenProp);
  let [selected, setSelected] = useState(value || tabs[0].key);
  return (
    <div className="w-full">
      {type === 'card' ? (
        <TabCardItems tabs={tabs} selected={selected} onChange={setSelected} accentColor={accentColor} />
      ) : (
        <TabNavItems tabs={tabs} selected={selected} onChange={setSelected} accentColor={accentColor} />
      )}
      <TabPaneList type={type} tabs={tabs} selected={selected} />
    </div>
  );
};

