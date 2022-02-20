import React, { useCallback, useState } from 'react';
import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/outline';
import { TreeContext } from '.';

export type TreeProps = {
  defaultExpanded?: string[];
  defaultCollapseIcon?: React.ReactNode;
  defaultExpandIcon?: React.ReactNode;
  defaultEndIcon?: React.ReactNode;
  blockNode?: boolean;
};

export const Tree: React.FC<TreeProps> = ({
  children,
  defaultExpanded = [],
  defaultCollapseIcon,
  defaultExpandIcon,
  defaultEndIcon,
  blockNode,
}) => {
  let [expanded, setExpanded] = useState<string[]>(defaultExpanded);

  let toggleItem = useCallback((key: string) => {
    if (expanded.includes(key)) {
      setExpanded(expanded.filter(i => i !== key));
      return;
    }
    setExpanded([...expanded, key]);
  }, [expanded]);

  let isItemExpanded = useCallback((key: string) => {
    return expanded.includes(key);
  }, [expanded]);

  return (
    <TreeContext.Provider value={{
      expanded,
      toggleItem,
      isItemExpanded,
      blockNode,
      defaultEndIcon: defaultEndIcon || <div className="w-3.5 h-3.5" />,
      defaultExpandedIcon: defaultExpandIcon || <ChevronDownIcon width={14} height={14} />,
      defaultCollapseIcon: defaultCollapseIcon || <ChevronRightIcon width={14} height={14} />,
    }}>
      <div className='flex flex-col'>
        {children}
      </div>
    </TreeContext.Provider>
  );
};
