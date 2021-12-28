import React, { ReactElement } from 'react';

export const ButtonGroup: React.FC<{ children: ReactElement[] }> = ({ children }) => (
  <>
    {children.map((child, index) => (
      React.cloneElement(child, { key: `btn-${index}`, className: 'rounded-none first:rounded-r-none first:rounded-l-md last:rounded-l-none last:rounded-r-md focus:z-20 relative border-r-0 last:border-r' })
    ))}
  </>
);
