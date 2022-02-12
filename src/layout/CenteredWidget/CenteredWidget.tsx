import classNames from 'classnames';
import React from 'react';

export const CenteredWidget: React.FC<React.ComponentPropsWithoutRef<'div'>> = ({ children, className }) => (
  <div className={classNames('max-w-xl mx-auto', className)}>{children}</div>
);
