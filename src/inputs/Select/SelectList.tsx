import React from 'react';
import { List } from 'base/List';
import { useSelectContext } from './SelectContext';

export const SelectList: React.FC = ({ children }) => {
  const { isOpen } = useSelectContext();

  if (!isOpen) {
    return null;
  }

  return (
    <List className="py-1 border border-gray-300 rounded-md shadow-lg bg-white mt-2 absolute min-w-full">
      {children}
    </List>
  );
};
