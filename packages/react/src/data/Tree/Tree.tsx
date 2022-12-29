import React, { useCallback, useState } from 'react';
import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { Box } from '../Box';
import { TreeContext } from './TreeContext';

export type TreeProps = {
  defaultExpanded?: string[];
  defaultCollapseIcon?: React.ReactNode;
  defaultExpandIcon?: React.ReactNode;
  defaultEndIcon?: React.ReactNode;
  blockNode?: boolean;
} & WithChildren;

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
      defaultEndIcon: defaultEndIcon || <Box width="3" height="3" />,
      defaultExpandedIcon: defaultExpandIcon || <ChevronDownIcon width={14} height={14} />,
      defaultCollapseIcon: defaultCollapseIcon || <ChevronRightIcon width={14} height={14} />,
    }}>
      <Box display="flex" flexDirection="column">
        {children}
      </Box>
    </TreeContext.Provider >
  );
};
