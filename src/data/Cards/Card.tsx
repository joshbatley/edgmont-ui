import classnames from 'classnames';
import React, { CSSProperties, forwardRef } from 'react';

export type CardProps = {
  children: React.ReactNode;
  style?: CSSProperties;
  classNames?: string;
};

export const Card = forwardRef<HTMLDivElement, CardProps>(({ children, classNames, ...rest }, ref) => (
  <div className={classnames('rounded-md bg-white shadow-sm overflow-hidden', classNames)} ref={ref} {...rest}>{children}</div>
));
