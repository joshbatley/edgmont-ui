import React, { useEffect, useRef } from 'react';
import { TextField, TextFieldProps } from 'inputs';
import { ChevronUpDownIcon } from '@heroicons/react/24/outline';
import { useSelectContext, SelectButton, SelectButtonProps } from '.';

export type SelectFilterProps = {
  textProps?: TextFieldProps;
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
    <TextField suffiXMarkIcon={<ChevronUpDownIcon height={16} width={16} />} ref={ref} {...textProps} {...getInputProps()} />
  );
};
