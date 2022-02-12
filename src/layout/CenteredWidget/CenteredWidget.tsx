import React from 'react';
import classNames from 'classnames';

export const CenteredWidget: React.FC<React.ComponentPropsWithoutRef<'div'>> = ({ children, className }) => (
  <div className={classNames('max-w-xl mx-auto', className)}>{children}</div>
);
