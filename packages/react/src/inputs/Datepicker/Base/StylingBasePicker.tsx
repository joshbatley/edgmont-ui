import { darken } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
/*
--------------------------
  Day names
--------------------------
*/
.react-datepicker__day-names {
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  justify-content: space-between;
}
.react-datepicker__day-name {
  text-align: center;
  padding: ${({ theme }) => theme.space[1]};
  color: ${({ theme }) => theme.colors.background[3]};
  font-size: ${({ theme }) => theme.fontSizes[1]};
  line-height: ${({ theme }) => theme.lineHeights[1]};
}

/*
--------------------------
  Calander body
--------------------------
*/

.react-datepicker__month {
  margin-top:${({ theme }) => theme.space[2]};
  > :not([hidden]) ~ :not([hidden]) {
    margin-bottom: ${({ theme }) => theme.space[1]};
    margin-top: ${({ theme }) => theme.space[1]};
  }
}
.react-datepicker__week {
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  width: 100%;
  justify-content: space-between;
}

.react-datepicker__day,
.react-datepicker__year-text,
.react-datepicker__month-text {
  cursor: pointer;
  text-align: center;
  :hover {
    background: ${({ theme }) => theme.colors.primaryHighlight};
    border-radius:${({ theme }) => theme.radii[3]};
  }
}

.react-datepicker__day--today {
  font-weight: 700;
}

.react-datepicker__day div {
  padding: 0.375rem;
}

.react-datepicker__day--in-range,
.react-datepicker__month--in-range {
  :hover {
    border-radius: 0px;
  }
  background: ${({ theme }) => theme.colors.primaryHighlight};
  color: ${({ theme }) => theme.colors.primaryAccent};
}

.react-datepicker__month--selected,
.react-datepicker__month--range-start,
.react-datepicker__month--range-end,
.react-datepicker__year-text--selected,
.react-datepicker__day--selected,
.react-datepicker__day--range-start,
.react-datepicker__day--range-end {
  color: ${({ theme }) => theme.colors.primaryHighlight};
}

.react-datepicker__day--range-start,
.react-datepicker__day--selecting-range-start,
.react-datepicker__day--selecting-range-start div,
.react-datepicker__day--range-start div,
.react-datepicker__month--range-start,
.react-datepicker__month--range-end {
  border-radius: ${({ theme }) => `${theme.radii[3]} 0 0 ${theme.radii[3]}`};
}

.react-datepicker__day--range-end,
.react-datepicker__month--range-end,
.react-datepicker__day--range-end div {
  border-radius: ${({ theme }) => `0 ${theme.radii[3]} ${theme.radii[3]} 0`};
}

.react-datepicker__day--selected div,
.react-datepicker__month--selected,
.react-datepicker__year-text--selected {
  border-radius: ${({ theme }) => theme.radii[3]};
}

.react-datepicker__day--selected div,
.react-datepicker__day--range-start div,
.react-datepicker__day--range-end div,
.react-datepicker__month--selected,
.react-datepicker__month--range-start,
.react-datepicker__month--range-end,
.react-datepicker__year-text--selected {
  background: ${({ theme }) => theme.colors.primary};
  :hover {
    background: ${({ theme }) => theme.colors.primary};
  }
}

.react-datepicker__day--outside-month {
  pointer-events: none;
  opacity: 0;
}
.react-datepicker__day--highlighted,
.react-datepicker__month--highlighted {
  order-radius: ${({ theme }) => theme.radii[3]};
  background: ${({ theme }) => theme.colors.primaryHighlight};
  color: ${({ theme }) => theme.colors.primaryAccent};
}

.react-datepicker__day--disabled,
.react-datepicker__month--disabled,
.react-datepicker__day--excluded,
.react-datepicker__month--excluded {
  cursor: not-allowed;
  opacity:0.5;
  :hover {
    background-color: transparent;
  }
  color: ${({ theme }) => theme.colors.background[3]};
}

.react-datepicker__day--in-selecting-range {
  :hover {
    border-radius: ${({ theme }) => `0 ${theme.radii[3]} ${theme.radii[3]} 0`};
    background: ${({ theme }) => darken(0.1, theme.colors.primaryHighlight)};
  }
  background: ${({ theme }) => theme.colors.primaryHighlight};
}

.react-datepicker__day--selecting-range-start,
.react-datepicker__day--selecting-range-end {
  background: ${({ theme }) => darken(0.1, theme.colors.primaryHighlight)};
}

.react-datepicker__day--selecting-range-start div,
.react-datepicker__day--selecting-range-end div {
  background: ${({ theme }) => darken(0.1, theme.colors.primaryHighlight)};
}

/*
-------------------------
  month selector
-------------------------
*/
.react-datepicker__monthPicker {
  display: grid;
  flex-direction: column;
}
.react-datepicker__month-wrapper {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
}
.react-datepicker__month-text {
  text-align: center;
  padding: ${({ theme }) => theme.space[1]};
}
.react-datepicker__month-container {
  padding-bottom: ${({ theme }) => theme.space[2]};
  padding-left: ${({ theme }) => theme.space[2]};
  padding-right: ${({ theme }) => theme.space[2]};
}

/*
------------------------
  year selector
------------------------
*/
.react-datepicker__year {
  margin-top: ${({ theme }) => theme.space[2]};
}
.react-datepicker__year--container {
  padding-bottom: ${({ theme }) => theme.space[2]};
  padding-left: ${({ theme }) => theme.space[2]};
  padding-right: ${({ theme }) => theme.space[2]};
}
.react-datepicker__year-wrapper {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
}
.react-datepicker__year-text {
  text-align: center;
  padding: ${({ theme }) => theme.space[1]};
}
`;
