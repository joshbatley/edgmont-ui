import React from 'react';
import { Text } from 'base';

export type LabelProps = {
  value: React.ReactNode;
  children: React.ReactElement;
};

export const Label: React.FC<LabelProps> = ({ value, children }) => {
  let isRequired = children.props.required;
  return (
    <label className="block">
      <div className="flex text-sm mb-1 ml-1">
        {value} {isRequired && <Text className="text-red-500">*</Text>}
      </div>
      {children}
    </label>
  );
};
