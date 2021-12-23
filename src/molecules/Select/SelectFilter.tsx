import React, { useEffect, useRef } from 'react';
import { TextField, TextFieldProps } from 'atoms/TextField';
import { useSelectContext } from './SelectContext';
import { SelectButton, SelectButtonProps } from './SelectButton';
import { SelectorIcon } from 'atoms/Icons/Outline';

type SelectFilterProps = TextFieldProps & SelectButtonProps;

export const SelectFilter: React.FC<SelectFilterProps> = ({ isClearable, ...args }) => {
  const ref = useRef<HTMLInputElement>(null);
  const { getInputProps, isOpen } = useSelectContext();

  useEffect(() => {
    if (isOpen) {
      ref?.current?.focus();
    }
  }, [isOpen]);

  if (!isOpen) {
    return <SelectButton isClearable={isClearable} {...args} />;
  }

  return (
    <TextField suffixIcon={<SelectorIcon height={16} width={16} />} ref={ref} {...args} {...getInputProps()} />
  );
};
