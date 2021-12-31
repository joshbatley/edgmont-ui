import React from 'react';
import { overriderDefault } from 'utils/override-default';

export type BoxProps = {
  children?: React.ReactNode,
} & React.ComponentPropsWithoutRef<'div'>;

let defaults = {
  padding: 'px-6 py-2',
  margin: '',
};

export const Box: React.FC<BoxProps> = ({
  children,
  className,
  ...rest
}: BoxProps) => {
  let overriders = overriderDefault(defaults, className);
  return (
    <div className={overriders} {...rest}>
      {children}
    </div>
  );
};
