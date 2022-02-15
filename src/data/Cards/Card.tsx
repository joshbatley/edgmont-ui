import React, { CSSProperties, forwardRef } from 'react';
import clsx from 'clsx';

export type CardProps = {
  children: React.ReactNode;
  style?: CSSProperties;
  className?: string;
};

export const Card = forwardRef<HTMLDivElement, CardProps>(({ children, className, ...rest }, ref) => (
  <div className={clsx('rounded-md bg-white shadow-sm overflow-hidden', className)} ref={ref} {...rest}>
    {children}
  </div>
));
