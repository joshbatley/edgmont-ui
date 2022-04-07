import React from 'react';
import clsx from 'clsx';

export const List: React.FC<React.ComponentPropsWithRef<'ul'>> = ({ children, className, ...rest }) => (
  <ul className={clsx('list-inside list-none', className)} {...rest}>
    {children}
  </ul>
);
