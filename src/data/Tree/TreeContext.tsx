import React, { useContext } from 'react';

type TreeContextProps = {
  expanded: string[];
  toggleItem: (key: string) => void;
  isItemExpanded: (key: string) => boolean;
  defaultCollapseIcon?: React.ReactNode;
  defaultExpandedIcon?: React.ReactNode;
  defaultEndIcon?: React.ReactNode;
  blockNode?: boolean;
};

export const TreeContext = React.createContext<TreeContextProps | undefined>(undefined);

export const useTreeContext = () => {
  const context = useContext(TreeContext);

  if (context === undefined) {
    throw new Error('useTreeContext must be used within a TreeContext provider');
  }

  return context;
};
