import React from 'react';
import { overriderDefault } from 'utils/override-default';

export type BoxProps = {
  children?: React.ReactNode,
  classes?: string,
};

let defaults = {
  padding: 'px-6 py-2',
  margin: '',
};

export const Box: React.FC<BoxProps> = ({
  children,
  classes,
  ...params
}: BoxProps) => {
  let overriders = overriderDefault(defaults, classes);
  return (
    <div className={overriders} {...params}>
      {children}
    </div>
  );
};
