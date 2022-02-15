import React from 'react';
import clsx from 'clsx';

export const CenteredWidget: React.FC<React.ComponentPropsWithoutRef<'div'>> = ({ children, className }) => (
  <div className={clsx('max-w-xl mx-auto', className)}>{children}</div>
);
