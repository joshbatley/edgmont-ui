import { CheckIcon } from '@heroicons/react/24/outline';
import { BaseControl, BaseControlProps } from '../BaseControl';

export type CheckboxPrpos = Omit<BaseControlProps, 'icon' | 'rounded'>;

export const Checkbox: React.FC<CheckboxPrpos> = ({ ...rest }) => (
  <BaseControl icon={<CheckIcon width="12" height="12" />} type="checkbox" {...rest} />
);
