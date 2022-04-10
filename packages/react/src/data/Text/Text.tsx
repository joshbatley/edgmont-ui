import React from 'react';
import clsx from 'clsx';

export type TextProps = {
  children?: React.ReactNode;
  as?: AsProp;
  className?: string;
};

export const Text: React.FC<TextProps> = ({ children, as: Component = 'p', className, ...params }) => (
  <Component className={className} {...params}>
    {children}
  </Component>
);

export const TextInline: React.FC<TextProps> = ({ children, as: Component = 'span', className, ...params }) => (
  <Component className={className} {...params}>
    {children}
  </Component>
);

export const TextMono: React.FC<TextProps> = ({ children, as: Component = 'p', className, ...params }) => (
  <Component className={clsx('font-mono', className)} {...params}>
    {children}
  </Component>
);
