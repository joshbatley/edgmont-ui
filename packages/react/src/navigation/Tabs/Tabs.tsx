import { useState, Children, isValidElement } from 'react';
import { TabItems } from './TabItems';
import { TabPaneList } from './TabPane';
import { Tab, TabsProps } from '../../types/Tabs';

const parseChildrenToTabs = (children: React.ReactNode): Tab[] => {
  return Children.toArray(children).map((node) => {
    if (!isValidElement(node)) {
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

export const Tabs: React.FC<TabsProps> = ({ children: childrenProp, value }) => {
  let tabs = parseChildrenToTabs(childrenProp);
  let [selected, setSelected] = useState(value || tabs[0].key);
  return (
    <>
      <TabItems tabs={tabs} selected={selected} onChange={setSelected} />
      <TabPaneList tabs={tabs} selected={selected} />
    </>
  );
};
