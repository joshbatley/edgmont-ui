import React, { useEffect, useRef } from 'react';
import { TextField, TextFieldProps } from 'inputs';
import { SelectorIcon } from 'icons/Outline';
import { useSelectContext, SelectButton, SelectButtonProps } from '.';

export type SelectFilterProps = {
  textProps?: TextFieldProps,
} & SelectButtonProps;

export const SelectFilter: React.FC<SelectFilterProps> = ({ textProps, ...rest }) => {
  let ref = useRef<HTMLInputElement>(null);
  let { getInputProps, isOpen } = useSelectContext();

  useEffect(() => {
    if (isOpen) {
      ref?.current?.focus();
    }
  }, [isOpen]);

  if (!isOpen) {
    return <SelectButton {...rest} />;
  }

  return (
    <TextField suffixIcon={<SelectorIcon height={16} width={16} />} ref={ref} {...textProps} {...getInputProps()} />
  );
};
