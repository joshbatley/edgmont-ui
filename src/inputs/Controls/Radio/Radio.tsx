import React from 'react';
import { RadioIcon } from 'atoms/Icons/Custom';
import { BaseControl, BaseControlProps } from '../BaseControl';

type RadioPrpos = Omit<BaseControlProps, 'icon' | 'rounded'>;

export const Radio: React.FC<RadioPrpos> = ({ ...args }) => {
  return (
    <BaseControl icon={<RadioIcon />} type="radio" rounded {...args} />
  );
};
