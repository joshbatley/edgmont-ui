import React from 'react';
import classnames from 'classnames';

export type TextProps = {
  children?: React.ReactNode,
  as?: React.ElementType,
  className?: string,
};

export const Text: React.FC<TextProps> = ({ children, as: Component = 'p', className, ...params }) => (
  <Component className={className} {...params}>
    {children}
  </Component>
);

export const TextMono: React.FC<TextProps> = ({ children, as: Component = 'p', className, ...params }) => (
  <Component className={classnames('font-mono', className)} {...params}>
    {children}
  </Component>
);
