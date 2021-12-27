import React from 'react';
import { CheckIcon } from 'base/Icons/Outline';
import { BaseControl, BaseControlProps } from '../BaseControl';

type CheckboxPrpos = Omit<BaseControlProps, 'icon' | 'rounded'>;

export const Checkbox: React.FC<CheckboxPrpos> = ({ ...rest }) => {
  return (
    <BaseControl icon={<CheckIcon />} type="checkbox" {...rest} />
  );
};
