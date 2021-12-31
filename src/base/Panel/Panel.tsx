import classNames from 'classnames';
import React from 'react';

export const Panel: React.FC<React.ComponentPropsWithoutRef<'div'>> = ({ className, children, ...rest }) => (
  <div className={classNames('bg-white shadow rounded', className)} {...rest}>{children}</div>
);
