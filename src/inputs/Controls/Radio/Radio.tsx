import React from 'react';
import { RadioIcon } from 'base/Icons/Custom';
import { BaseControl, BaseControlProps } from '../BaseControl';

type RadioPrpos = Omit<BaseControlProps, 'icon' | 'rounded'>;

export const Radio: React.FC<RadioPrpos> = ({ ...rest }) => {
  return (
    <BaseControl icon={<RadioIcon />} type="radio" rounded {...rest} />
  );
};
