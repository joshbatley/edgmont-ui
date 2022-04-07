import React from 'react';
import clsx from 'clsx';

export const Panel: React.FC<React.ComponentPropsWithoutRef<'div'>> = ({ className, children, ...rest }) => (
  <div className={clsx('bg-white shadow rounded', className)} {...rest}>{children}</div>
);
