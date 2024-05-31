import { Input, InputProps } from './Input';

export type NumberFieldProps = Omit<InputProps, 'type'>;

export const NumberField: React.FC<NumberFieldProps> = ({ ...rest }) => (
  <Input type="number" {...rest} />
);
