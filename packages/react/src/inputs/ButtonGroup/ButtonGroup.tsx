import React from 'react';
import clsx from 'clsx';

export const ButtonGroup: React.FC<WithChildren> = ({ children }) => (
  <>
    {React.Children.map(children, (child, index) => React.isValidElement(child) && (
      React.cloneElement(child, {
        ...child.props,
        key: `btn-${index}`,
        className: clsx(
          'rounded-none relative -mr-px focus:ring-0 first:rounded-r-none first:rounded-l-md last:rounded-l-none last:rounded-r-md',
          child.props.className,
        ),
      })
    ))}
  </>
);
