import React, { useEffect, useRef } from 'react';
import { TextField, TextFieldProps } from 'inputs';
import { SelectorIcon } from 'base/Icons/Outline';
import { useSelectContext } from './SelectContext';
import { SelectButton, SelectButtonProps } from './SelectButton';

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
