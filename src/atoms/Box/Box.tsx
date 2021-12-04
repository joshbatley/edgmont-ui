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

const Box: React.FC<Props> = ({
  children,
  classes,
}) => {
  let overriders = overriderDefault(defaults, classes);
  return (
    <div className={overriders}>
      {children}
    </div>
  );
};

export { Box };
