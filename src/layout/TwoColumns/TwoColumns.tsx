import React from 'react';
import classNames from 'classnames';

export type TwoColumnsProps = {
  sideNav?: React.ReactNode;
} & React.ComponentPropsWithRef<'div'>;

export const TwoColumns: React.FC<TwoColumnsProps> = ({ children, sideNav, className, ...rest }) => (
  <div
    className={classNames('h-full md:grid md:grid-cols-[19.5rem_auto] md:grid-flow-row min-w-0', className)}
    {...rest}
  >
    {sideNav}
    {children}
  </div>
);
