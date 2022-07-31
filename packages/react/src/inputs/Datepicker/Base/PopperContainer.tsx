import React from 'react';
import { Portal } from 'utils';

export const PopperContainer: React.FC<WithChildren> = ({ children }) => (
  <Portal>
    {children}
  </Portal>
);
