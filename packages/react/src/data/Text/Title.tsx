import React from 'react';
import clsx from 'clsx';

type TagType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export type HeadingProps = {
  children?: React.ReactNode,
  as?: TagType,
  className?: string,
};

const addHeadingClass = (comp: TagType) => {
  switch (comp) {
    case 'h1': return 'text-3xl';
    case 'h2': return 'text-2xl';
    case 'h3': return 'text-xl';
    case 'h4': return 'text-lg';
    case 'h5': return 'text-base';
    case 'h6': return 'text-sm';
  }
};

export const Title: React.FC<HeadingProps> = ({ children, as: Component = 'h1', className, ...params }) => (
  <Component className={clsx(addHeadingClass(Component), className)} {...params}>
    {children}
  </Component>
);

