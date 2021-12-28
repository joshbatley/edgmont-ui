import React from 'react';
import { RadioIcon } from 'base/Icons/Custom';
import { BaseControl, BaseControlProps } from '../BaseControl';

export type RadioPrpos = Omit<BaseControlProps, 'icon' | 'rounded'>;

export const Radio: React.FC<RadioPrpos> = ({ ...rest }) => (
  <BaseControl icon={<RadioIcon />} type="radio" rounded {...rest} />
);

