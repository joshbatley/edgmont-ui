import React from 'react';
import { Portal } from 'utils';

export const PopperContainer: React.FC = ({ children }) => (
  <Portal>
    {children}
  </Portal>
);
