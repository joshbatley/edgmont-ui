import React from 'react';
import { CheckIcon } from 'base/Icons/Outline';
import { BaseControl, BaseControlProps } from '../BaseControl';

export type CheckboxPrpos = Omit<BaseControlProps, 'icon' | 'rounded'>;

export const Checkbox: React.FC<CheckboxPrpos> = ({ ...rest }) => (
  <BaseControl icon={<CheckIcon />} type="checkbox" {...rest} />
);
