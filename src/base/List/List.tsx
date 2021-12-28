import React from 'react';
import classNames from 'classnames';

export const List: React.FC<React.ComponentPropsWithRef<'ul'>> = ({ children, className, ...rest }) => (
  <ul className={classNames(className, 'list-inside list-none')} {...rest}>
    {children}
  </ul>
);
