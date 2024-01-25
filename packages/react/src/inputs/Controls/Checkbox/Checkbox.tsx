import { CheckIcon } from '@heroicons/react/24/outline';
import { BaseControl, BaseControlProps } from '../BaseControl';

export type CheckboxPrpos = Omit<BaseControlProps, 'icon' | 'rounded'>;

export const Checkbox: React.FC<CheckboxPrpos> = ({ ...rest }) => (
  <BaseControl icon={<CheckIcon />} type="checkbox" {...rest} />
);
