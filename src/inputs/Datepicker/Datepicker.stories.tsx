import React, { useState } from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { format } from 'date-fns';
import { BasePicker, DateRangePicker, MonthPicker as MP, YearPicker as YP, DatePicker } from '.';

export default {
  title: 'Inputs/Datepicker',
  component: BasePicker,
} as Meta;

export const BasicDatePicker: Story = ({ ...rest }) => (
  <DatePicker {...rest} />
);

export const RangePicker: Story = ({ ...rest }) => (
  <DateRangePicker showClear placeholder='Click to select a date' {...rest} />
);

export const MonthPicker: Story = ({ ...rest }) => (
  <MP placeholder='Click to select a month' {...rest} />
);

export const YearPicker: Story = ({ ...rest }) => (
  <YP placeholder='Click to select a year' {...rest} />
);

export const CustomSetup: Story = () => {
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
CustomSetup.parameters = {
  controls: { hideNoControlsWarning: true },
};
