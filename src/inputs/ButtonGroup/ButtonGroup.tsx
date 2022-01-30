import classNames from 'classnames';
import React from 'react';

export const ButtonGroup: React.FC = ({ children }) => (
  <>
    {React.Children.map(children, (child, index) => React.isValidElement(child) && (
      React.cloneElement(child, {
        ...child.props,
        key: `btn-${index}`,
        className: classNames(
          'rounded-none relative -mr-px focus:ring-0',
          'first:rounded-r-none first:rounded-l-md',
          'last:rounded-l-none last:rounded-r-md',
          child.props.className,
        ),
      })
    ))}
  </>
);
