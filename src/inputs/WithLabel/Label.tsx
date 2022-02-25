import React from 'react';
import clsx from 'clsx';
import { Text } from 'data';

export type LabelProps = {
  value: React.ReactNode;
  className?: string;
  children: React.ReactElement;
};

export const Label: React.FC<LabelProps> = ({ value, className, children }) => {
  let isRequired = children.props.required;
  return (
    <label className={clsx('block', className)}>
      <div className="flex text-sm mb-1 ml-1">
        {value} {isRequired && <Text className="text-red-500">*</Text>}
      </div>
      {children}
    </label>
  );
};
