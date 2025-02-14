import { useEffect, useRef } from 'react';
import { ChevronUpDownIcon } from '@heroicons/react/24/outline';
import { Input, InputProps } from '../Input';
import { useSelectContext } from './SelectContext';
import { SelectButton, SelectButtonProps } from './SelectButton';

export type SelectFilterProps = {
  textProps?: InputProps;
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
    <Input suffixMarkIcon={<ChevronUpDownIcon height={16} width={16} />} ref={ref} {...textProps} {...getInputProps()} />
  );
};
