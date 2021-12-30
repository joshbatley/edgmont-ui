import React from 'react';
import { Portal } from 'base';

export const Backdrop: React.FC = ({ children, ...rest }) => (
  <Portal>
    <div
      className="w-screen h-screen fixed inset-0 overflow-auto bg-gray-900 opacity-70 flex justify-center items-center"
      style={{ zIndex: 9999 }}
      {...rest}
    >
      {children}
    </div>
  </Portal>
);
