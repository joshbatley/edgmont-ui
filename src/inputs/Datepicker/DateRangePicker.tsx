import React, { useState } from 'react';
import { format } from 'date-fns';
import { BasePicker, BasePickerProps } from '.';

type DateOrNull = Date | null;

export type DateRangePickerProps = {
  defaultStartDate?: DateOrNull;
  defaultEndDate?: DateOrNull;
  inputValueFormat?: string;
  onChange?: (dates: [DateOrNull, DateOrNull], event?: React.SyntheticEvent<any, Event>) => void;
} & Omit<BasePickerProps, 'onChange' | 'handleClear' | 'selectsRange' | 'endDate' | 'startDate' | 'inputValue'>;

export const DateRangePicker: React.FC<DateRangePickerProps> = ({ defaultStartDate, defaultEndDate, onChange = () => { }, inputValueFormat = 'dd/MM/yyyy', monthsShown = 2, ...rest }) => {
  let [startDate, setStartDate] = useState<DateOrNull>(defaultStartDate || null);
  let [endDate, setEndDate] = useState<DateOrNull>(defaultEndDate || null);
  let inputValue = (startDate && endDate) && `${format(startDate, inputValueFormat)} - ${format(endDate, inputValueFormat)}`;

  let clear = () => {
    setStartDate(null);
    setEndDate(null);
  };

  let handleChange = (dates: [DateOrNull, DateOrNull], event?: React.SyntheticEvent<any, Event>) => {
    let [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    onChange?.(dates, event);
  };

  return (
    <BasePicker
      {...rest}
      inputValue={inputValue || undefined}
      startDate={startDate}
      endDate={endDate}
      selectsRange
      handleClear={clear}
      monthsShown={monthsShown}
      onChange={handleChange}
    />
  );
};
