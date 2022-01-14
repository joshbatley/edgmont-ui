import React, { Ref, useState } from 'react';
import { ReactDatePickerCustomHeaderProps } from 'react-datepicker';
import { format, getYear } from 'date-fns';
import { ChevronLeftIcon, ChevronRightIcon, ChevronDoubleLeftIcon, ChevronDoubleRightIcon } from 'base/Icons/Outline';
import { ClickableElement, HighlightButton } from 'inputs';
import { Menu, MenuItem } from 'navigation/Menu';

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export type DateHeaderProps = {
  monthsShown?: number;
  showMonthYearPicker?: boolean;
  showYearPicker?: boolean;
} & ReactDatePickerCustomHeaderProps;

const LeftNavigation: React.FC<{ decreaseYear?: () => void, decreaseMonth?: () => void }> = ({ decreaseYear, decreaseMonth }) => (
  <>
    {decreaseYear && (
      <HighlightButton size='small' onClick={decreaseYear}>
        <ChevronDoubleLeftIcon width={16} height={16} />
      </HighlightButton>
    )}
    {decreaseMonth && (
      <HighlightButton size='small' onClick={decreaseMonth}>
        <ChevronLeftIcon width={16} height={16} />
      </HighlightButton>
    )}
  </>
);

const RightNavigation: React.FC<{ increaseYear?: () => void, increaseMonth?: () => void }> = ({ increaseYear, increaseMonth }) => (
  <>
    {increaseMonth && (
      <HighlightButton size='small' onClick={increaseMonth}>
        <ChevronRightIcon width={16} height={16} />
      </HighlightButton>
    )}
    {increaseYear && (
      <HighlightButton size='small' onClick={increaseYear}>
        <ChevronDoubleRightIcon width={16} height={16} />
      </HighlightButton>
    )}
  </>
);

export function getYearsPeriod(
  date: Date,
  yearItemNumber = 12,
) {
  const endPeriod = Math.ceil(getYear(date) / yearItemNumber) * yearItemNumber;
  const startPeriod = endPeriod - (yearItemNumber - 1);
  return [startPeriod, endPeriod];
}

export const DateHeader: React.FC<DateHeaderProps> = ({
  monthsShown, monthDate, customHeaderCount, showMonthYearPicker, showYearPicker, date,
  decreaseMonth, increaseMonth, decreaseYear, increaseYear, changeMonth, changeYear,
}) => {
  let [monthMenuOpen, setMonthMenuOpen] = useState(false);
  let [itemRef, setItemRef] = useState(null);

  let showLeftNav = monthsShown === 1 || customHeaderCount === 0;
  let showRightNav = monthsShown === 1 || customHeaderCount === 1;
  let isOpen = showMonthYearPicker || showYearPicker ? false : monthMenuOpen;

  let formatting = (showMonthYearPicker) ? 'yyyy' : 'MMMM yyyy';

  function getFriendlyString() {
    if (showYearPicker) {
      let [start, end] = getYearsPeriod(date, 12);
      return `${start} - ${end}`;
    }
    return format(monthDate, formatting);
  }

  function handleMonthChange(month: number) {
    setMonthMenuOpen(false);
    changeMonth(month);
  }

  function canModifyMonths(fn: () => void) {
    if (showMonthYearPicker || showYearPicker) {
      return undefined;
    }
    return fn;
  }

  let decreaseYearFn = showYearPicker ? () => changeYear(getYear(date) - 12) : decreaseYear;
  let increaseYearFn = showYearPicker ? () => changeYear(getYear(date) + 12) : increaseYear;

  return (
    <div>
      <div className="flex items-center justify-center py-2 border-b">

        {showLeftNav && <LeftNavigation decreaseMonth={canModifyMonths(decreaseMonth)} decreaseYear={decreaseYearFn} />}

        <ClickableElement
          ref={setItemRef as Ref<HTMLButtonElement>}
          className="grow justify-center"
          onClick={() => setMonthMenuOpen(true)}
        >
          {getFriendlyString()}
        </ClickableElement>

        {showRightNav && <RightNavigation increaseMonth={canModifyMonths(increaseMonth)} increaseYear={increaseYearFn} />}

      </div>
      <Menu inline handleClose={() => setMonthMenuOpen(false)} itemRef={itemRef} isOpen={isOpen} maxHeight={200}>
        {months.map((month, idx) => (
          <MenuItem key={month} onClick={() => handleMonthChange(idx)}>{month}</MenuItem>
        ))}
      </Menu>
    </div >
  );
};

