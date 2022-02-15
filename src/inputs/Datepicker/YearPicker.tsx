import React, { useState } from 'react';
import { format, subYears } from 'date-fns';
import { BasePicker, BasePickerProps } from '.';

type DateOrNull = Date | null;

export type YearPickerProps = {
  defaultDate?: DateOrNull;
  inputValueFormat?: string;
  onChange?: (dates: DateOrNull, event?: React.SyntheticEvent<any, Event>) => void;
} & Omit<BasePickerProps, 'onChange' | 'handleClear' | 'selectsRange' | 'Selected' | 'startDate' | 'inputValue'>;

export const YearPicker: React.FC<YearPickerProps> = ({ defaultDate, onChange = () => { }, inputValueFormat = 'yyyy', ...rest }) => {
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
      selected={subYears(new Date(), 10)}
      handleClear={clear}
      showYearPicker
      dateFormat="yyyy"
      onChange={handleChange}
    />
  );
};
