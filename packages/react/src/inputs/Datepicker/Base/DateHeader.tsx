import { Ref, useState } from 'react';
import { ReactDatePickerCustomHeaderProps } from 'react-datepicker';
import styled from 'styled-components';
import { format, getYear } from 'date-fns';
import { ClickableElement } from '../../../inputs/Button';
import { Menu, MenuItem } from '../../../navigation/Menu';
import { Box } from '../../../data';
import { LeftNavigation, RightNavigation } from './DateNavigation';

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

const StyledMenu = styled(Menu)`
  max-height: 200px;
`;

export type DateHeaderProps = {
  monthsShown?: number;
  showMonthYearPicker?: boolean;
  showYearPicker?: boolean;
} & ReactDatePickerCustomHeaderProps;

const getYearsPeriod = (
  date: Date,
  yearItemNumber = 12,
) => {
  let endPeriod = Math.ceil(getYear(date) / yearItemNumber) * yearItemNumber;
  let startPeriod = endPeriod - (yearItemNumber - 1);
  return [startPeriod, endPeriod];
};

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

  let getFriendlyString = () => {
    if (showYearPicker) {
      let [start, end] = getYearsPeriod(date, 12);
      return `${start} - ${end}`;
    }
    return format(monthDate, formatting);
  };

  let handleMonthChange = (month: number) => {
    setMonthMenuOpen(false);
    changeMonth(month);
  };

  let canModifyMonths = (fn: () => void) => {
    if (showMonthYearPicker || showYearPicker) {
      return undefined;
    }
    return fn;
  };

  let decreaseYearFn = showYearPicker ? () => changeYear(getYear(date) - 12) : decreaseYear;
  let increaseYearFn = showYearPicker ? () => changeYear(getYear(date) + 12) : increaseYear;

  return (
    <div>
      <Box display="flex" alignItems="center" justifyContent="center" py="2" borderBottom="background2.1">
        {showLeftNav && <LeftNavigation decreaseMonth={canModifyMonths(decreaseMonth)} decreaseYear={decreaseYearFn} />}
        <ClickableElement
          ref={setItemRef as Ref<HTMLButtonElement>}
          flexGrow="1"
          justifyContent="center"
          onClick={() => setMonthMenuOpen(true)}
        >
          {getFriendlyString()}
        </ClickableElement>
        {showRightNav && <RightNavigation increaseMonth={canModifyMonths(increaseMonth)} increaseYear={increaseYearFn} />}
      </Box>
      <StyledMenu inline handleClose={() => setMonthMenuOpen(false)} itemRef={itemRef} isOpen={isOpen}>
        {months.map((month, idx) => (
          <MenuItem key={month} onClick={() => handleMonthChange(idx)}>{month}</MenuItem>
        ))}
      </StyledMenu>
    </div >
  );
};

