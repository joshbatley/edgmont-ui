import React, { useState } from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { format } from 'date-fns';
import { BasePicker, DatePicker, DateRangePicker, MonthPicker, YearPicker } from './';

export default {
  title: 'Inputs/Datepicker',
  component: BasePicker,
} as Meta;

export const Default: Story = ({ }) => (
  <DatePicker placeholder='Click to select a date' />
);

export const Range: Story = ({ }) => (
  <DateRangePicker showClear placeholder='Click to select a date' />
);

export const Month: Story = ({ }) => (
  <MonthPicker placeholder='Click to select a month' />
);

export const Year: Story = ({ }) => (
  <YearPicker placeholder='Click to select a year' />
);

export const Custom: Story = () => {
  let [date, setDate] = useState<Date | null>(null);
  let inputValue = date && format(date, 'dd/MM/yyyy');
  return (
    <BasePicker
      inputValue={inputValue || undefined}
      placeholder='Click to select a date'
      selected={date}
      handleClear={() => setDate(null)}
      onChange={(d) => setDate(d)}
    />
  );
};
