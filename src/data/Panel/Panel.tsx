import React from 'react';
import classNames from 'classnames';

export const Panel: React.FC<React.ComponentPropsWithoutRef<'div'>> = ({ className, children, ...rest }) => (
  <div className={classNames('bg-white shadow rounded', className)} {...rest}>{children}</div>
);
