import React from 'react';

export const TextFieldGroup: React.FC = ({ children }) => (
  <div>{React.Children.map(children, (child, idx) => (
    React.cloneElement(child as React.ReactElement, {
      key: `textField-${idx}`,
      className: 'rounded-none border-b-0 focus:z-20 relative first:rounded-t-md last:rounded-b-md last:border-b',
    })
  ))}</div>
);
