import classNames from 'classnames';
import React from 'react';

export const List: React.FC<React.ComponentPropsWithRef<'ul'>> = ({ children, className, ...args }) => (
  <ul className={classNames(className, 'list-inside list-none')} {...args}>
    {children}
  </ul>
);
