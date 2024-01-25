import { useContext, createContext } from 'react';

export type TreeContextProps = {
  expanded: string[];
  toggleItem: (key: string) => void;
  isItemExpanded: (key: string) => boolean;
  defaultCollapseIcon?: React.ReactNode;
  defaultExpandedIcon?: React.ReactNode;
  defaultEndIcon?: React.ReactNode;
  blockNode?: boolean;
};

export const TreeContext = createContext<TreeContextProps | undefined>(undefined);

export const useTreeContext = () => {
  let context = useContext(TreeContext);

  if (context === undefined) {
    throw new Error('useTreeContext must be used within a TreeContext provider');
  }

  return context;
};
