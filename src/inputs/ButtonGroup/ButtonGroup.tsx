import React, { ReactElement } from 'react';

export const ButtonGroup: React.FC = ({ children }) => (
  <>
    {React.Children.map(children, (child, index) => (
      React.cloneElement(child as ReactElement, { key: `btn-${index}`, className: 'rounded-none first:rounded-r-none first:rounded-l-md last:rounded-l-none last:rounded-r-md focus:z-20 relative border-r-0 last:border-r' })
    ))}
  </>
);
