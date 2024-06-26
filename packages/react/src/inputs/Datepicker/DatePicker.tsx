import { useState } from 'react';
import { format } from 'date-fns';
import { BasePicker, BasePickerProps } from './Base/BasePicker';

type DateOrNull = Date | null;

export type DatePickerProps = {
  defaultDate?: DateOrNull;
  inputValueFormat?: string;
  onChange?: (dates: DateOrNull, event?: React.SyntheticEvent<any, Event>) => void;
} & Omit<BasePickerProps, 'onChange' | 'handleClear' | 'selectsRange' | 'Selected' | 'startDate' | 'inputValue'>;

export const DatePicker: React.FC<DatePickerProps> = ({
  defaultDate, onChange = () => { }, inputValueFormat = 'dd/MM/yyyy', ...rest
}) => {
  let [selectedDate, setSelectedDate] = useState<DateOrNull>(defaultDate || null);
  let inputValue = selectedDate && format(selectedDate, inputValueFormat);

  let clear = () => {
    setSelectedDate(null);
  };

  let handleChange = (date: DateOrNull, event?: React.SyntheticEvent<any, Event>) => {
    setSelectedDate(date);
    onChange?.(date, event);
  };

  return (
    <BasePicker
      {...rest}
      inputValue={inputValue || undefined}
      selected={selectedDate}
      handleClear={clear}
      onChange={handleChange}
    />
  );
};
