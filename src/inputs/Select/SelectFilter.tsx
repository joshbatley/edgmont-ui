import React, { useEffect, useRef } from 'react';
import { TextField, TextFieldProps } from 'inputs/TextField';
import { useSelectContext } from './SelectContext';
import { SelectButton, SelectButtonProps } from './SelectButton';
import { SelectorIcon } from 'base/Icons/Outline';

type SelectFilterProps = TextFieldProps & SelectButtonProps;

export const SelectFilter: React.FC<SelectFilterProps> = ({ isClearable, ...rest }) => {
  const ref = useRef<HTMLInputElement>(null);
  const { getInputProps, isOpen } = useSelectContext();

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
