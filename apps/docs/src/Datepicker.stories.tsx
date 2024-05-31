import { StoryObj } from '@storybook/react';
import {
  BasePicker,
  DatePicker,
  DateRangePicker,
} from '@edgmont-ui/react';

export default {
  title: 'Inputs/Datepicker',
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

export const WithFormatting: StoryObj<typeof DatePicker> = {
  render: ({ ...rest }) => (
    <DatePicker defaultDate={new Date()} inputValueFormat="EEEE do MMMM yyyy" placeholder="Click to select a date" {...rest} />
  ),
};
