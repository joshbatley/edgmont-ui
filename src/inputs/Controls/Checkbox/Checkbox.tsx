import React from 'react';
import { CheckIcon } from 'atoms/Icons/Outline';
import { BaseControl, BaseControlProps } from '../BaseControl';

type CheckboxPrpos = Omit<BaseControlProps, 'icon' | 'rounded'>;

export const Checkbox: React.FC<CheckboxPrpos> = ({ ...args }) => {
  return (
    <BaseControl icon={<CheckIcon />} type="checkbox" {...args} />
  );
};
