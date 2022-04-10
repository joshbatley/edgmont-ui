import React from 'react';
import clsx from 'clsx';

export type BoxProps = {
  children?: React.ReactNode;
} & React.ComponentPropsWithoutRef<'div'>;

export const Box: React.FC<BoxProps> = ({ children, className, ...rest }) => (
  <div className={clsx('px-6 py-2', className)} {...rest}>
    {children}
  </div>
);

