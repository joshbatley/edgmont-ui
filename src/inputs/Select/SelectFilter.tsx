import React, { useEffect, useRef } from 'react';
import { TextField, TextFieldProps } from 'inputs';
import { SelectorIcon } from 'feedback/Icons/Outline';
import { useSelectContext, SelectButton, SelectButtonProps } from '.';

export type SelectFilterProps = TextFieldProps & SelectButtonProps;

export const SelectFilter: React.FC<SelectFilterProps> = ({ isClearable, ...rest }) => {
  let ref = useRef<HTMLInputElement>(null);
  let { getInputProps, isOpen } = useSelectContext();

  useEffect(() => {
    if (isOpen) {
      ref?.current?.focus();
    }
  }, [isOpen]);

  if (!isOpen) {
    return <SelectButton isClearable={isClearable} {...rest} />;
  }

  return (
    <TextField suffixIcon={<SelectorIcon height={16} width={16} />} ref={ref} {...rest} {...getInputProps()} />
  );
};
