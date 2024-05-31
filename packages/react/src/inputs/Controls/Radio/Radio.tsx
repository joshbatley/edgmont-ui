import { RadioIcon } from '../../../utils';
import { BaseControl, BaseControlProps } from '../BaseControl';

export type RadioPrpos = Omit<BaseControlProps, 'icon' | 'rounded'>;

export const Radio: React.FC<RadioPrpos> = ({ ...rest }) => (
  <BaseControl
    icon={<RadioIcon width="16" height="16" />}
    type="radio"
    labelText={rest.labelText || rest.value?.toString()}
    value={rest.value || rest.labelText}
    rounded
    {...rest}
  />
);

