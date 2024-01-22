import React, { useState } from "react";
import { StoryObj } from "@storybook/react";
import { format } from "date-fns";
import {
  BasePicker,
  DatePicker,
  DateRangePicker,
  MonthPicker as MP,
  YearPicker as YP,
} from "@edgmont-ui/react";

export default {
  title: "Inputs/Datepicker",
  component: BasePicker,
};

export const BasicDatePicker: StoryObj<typeof DatePicker> = {
  render: ({ ...rest }) => (
    <DatePicker placeholder="Click to select a date" {...rest} />
  ),
};

export const RangePicker: StoryObj<typeof DateRangePicker> = {
  render: ({ ...rest }) => (
    <DateRangePicker showClear placeholder="Click to select a date" {...rest} />
  ),
};

export const MonthPicker: StoryObj<typeof MP> = {
  render: ({ ...rest }) => (
    <MP placeholder="Click to select a month" {...rest} />
  ),
};

export const YearPicker: StoryObj<typeof YP> = {
  render: ({ ...rest }) => (
    <YP placeholder="Click to select a year" {...rest} />
  ),
};

export const CustomSetup: StoryObj<typeof BasePicker> = {
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
  render: () => {
    let [date, setDate] = useState<Date | null>(null);
    let inputValue = date && format(date, "dd/MM/yyyy");
    return (
      <BasePicker
        inputValue={inputValue || undefined}
        placeholder="Click to select a date"
        selected={date}
        handleClear={() => setDate(null)}
        onChange={(d) => setDate(d)}
      />
    );
  },
};
