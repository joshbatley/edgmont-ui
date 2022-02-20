import React from 'react';
import { CheckIcon } from 'icons/Outline';
import { BaseControl, BaseControlProps } from '../BaseControl';

export type CheckboxPrpos = Omit<BaseControlProps, 'icon' | 'rounded'>;

export const Checkbox: React.FC<CheckboxPrpos> = ({ ...rest }) => (
  <BaseControl icon={<CheckIcon />} type="checkbox" {...rest} />
);
