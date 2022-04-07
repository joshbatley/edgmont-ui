import React from 'react';
import clsx from 'clsx';

export const CardContent: React.FC<React.ComponentPropsWithoutRef<'div'>> = ({ children, className }) => (
  <div className={clsx('px-3 py-2', className)}>{children}</div>
);
