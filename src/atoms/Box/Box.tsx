import React from 'react';
import { overriderDefault } from 'utils/override-default';

export type Props = {
  children?: React.ReactNode,
  classes?: string,
};

let defaults = {
  padding: 'px-6 py-2',
  margin: '',
};

export const Box: React.FC<Props> = ({
  children,
  classes,
}: Props) => {
  let overriders = overriderDefault(defaults, classes);
  return (
    <div className={overriders}>
      {children}
    </div>
  );
};
