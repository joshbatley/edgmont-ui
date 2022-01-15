import React from 'react';
import { TextField, TextFieldProps } from '.';

export type NumberFieldProps = Omit<TextFieldProps, 'type'>;

export const NumberField: React.FC<NumberFieldProps> = ({ ...rest }) => (
  <TextField type="number" {...rest} />
);
