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
  color: ${({ theme }) => theme.colors.mutedForeground};
  font-size: ${({ theme }) => theme.fontSizes[1]};
  line-height: ${({ theme }) => theme.lineHeights[1]};
}

/*
--------------------------
  Calander body
--------------------------
*/

.react-datepicker__aria-live {
  display: none;
}

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
    background: ${({ theme }) => theme.colors.accent};
    border-radius:${({ theme }) => theme.radii[3]};
  }
}

.react-datepicker__day--today {
  font-weight: 700;
}

.react-datepicker__day div {
  padding: 0.375rem;
}

.react-datepicker__day--in-range div,
.react-datepicker__month--in-range div {
  :hover {
    border-radius: 0px;
  }
  background: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.foreground};
}

.react-datepicker__month--selected,
.react-datepicker__month--range-start,
.react-datepicker__month--range-end,
.react-datepicker__year-text--selected,
.react-datepicker__day--selected,
.react-datepicker__day--range-start div,
.react-datepicker__day--range-end div {
  color: ${({ theme }) => theme.colors.background};
}

.react-datepicker__day--range-start div,
.react-datepicker__day--range-end div,
.react-datepicker__day--selecting-range-start div,
.react-datepicker__day--selecting-range-end div,
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
  border-radius: ${({ theme }) => theme.radii[3]};
  background: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.foreground};
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
  color: ${({ theme }) => theme.colors.accent};
}

.react-datepicker__day--in-selecting-range {
  :hover {
    border-radius: ${({ theme }) => theme.radii[3]};
    background: ${({ theme }) => darken(0.1, theme.colors.accent)};
  }
  background: ${({ theme }) => theme.colors.accent};
}

.react-datepicker__day--selecting-range-start div,
.react-datepicker__day--selecting-range-end div {
  background: ${({ theme }) => darken(0.1, theme.colors.primary)};
  color: ${({ theme }) => theme.colors.primaryForeground};
}


.react-datepicker__month-container:last-of-type:not(:first-of-type) {
  margin-left: ${({ theme }) => theme.sizes[4]};
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
  gap: 5px;
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.react-datepicker__year-text {
  text-align: center;
  padding: ${({ theme }) => theme.space[1]};
}
`;
