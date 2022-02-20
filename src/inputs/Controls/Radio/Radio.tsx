import React from 'react';
import { RadioIcon } from 'feedback/Icons/Custom';
import { BaseControl, BaseControlProps } from '../BaseControl';

export type RadioPrpos = Omit<BaseControlProps, 'icon' | 'rounded'>;

export const Radio: React.FC<RadioPrpos> = ({ ...rest }) => (
  <BaseControl
    icon={<RadioIcon />}
    type="radio"
    labelText={rest.labelText || rest.value?.toString()}
    value={rest.value || rest.labelText}
    rounded
    {...rest}
  />
);

