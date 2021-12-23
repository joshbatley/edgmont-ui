import { ControllerStateAndHelpers } from 'downshift';
import React, { useContext } from 'react';

export const SelectContext = React.createContext<ControllerStateAndHelpers<any> | undefined>(undefined);

export const useSelectContext = () => {
  const context = useContext(SelectContext);

  if (context === undefined) {
    throw new Error('useSelectContext must be used within a SelectContext provider');
  }

  return context;
};
