import classNames from 'classnames';
import React from 'react';

export const List: React.FC<React.ComponentPropsWithRef<'ul'>> = ({ children, className, ...rest }) => (
  <ul className={classNames(className, 'list-inside list-none')} {...rest}>
    {children}
  </ul>
);
