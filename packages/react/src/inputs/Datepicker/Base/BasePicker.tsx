import { Ref, useState } from 'react';
import Picker, { ReactDatePickerCustomHeaderProps, ReactDatePickerProps } from 'react-datepicker';
import { PopperContainer } from './PopperContainer';
import { DateHeader } from './DateHeader';
import { DateInput } from './DateInput';
import { DateContainer } from './DateContainer';
import { DateWrapper } from './DateWrapper';
import { Container } from './StylingBasePicker';

type SharedProps = {
  placeholder?: string;
  inputValue?: string;
  showClear?: boolean;
  handleClear?: () => void;
};
type SelectRange = SharedProps & ReactDatePickerProps<true>;
type SelectSingle = SharedProps & ReactDatePickerProps;

export type BasePickerProps = (SelectRange | SelectSingle);

export const BasePicker: React.FC<BasePickerProps> = ({
  placeholder, handleClear, dateFormat = 'dd/MM/yyyy', inputValue, monthsShown = 1, shouldCloseOnSelect = true, onChange, showMonthYearPicker, showYearPicker, showClear = false, ...rest
}) => {
  let [isOpen, setOpen] = useState(false);
  let [wrappedRef, setWrappedRef] = useState(null);

  let handleChange = (value: [Date | null, Date | null] & Date, e: any) => {
    let isComplete = (Array.isArray(value) && value[0] && value[1]) || (!Array.isArray(value) && value !== null);
    if (shouldCloseOnSelect && isComplete) {
      setOpen(false);
    }
    onChange(value, e);
  };

  let defaults = {
    dateFormat: dateFormat,
    monthsShown: monthsShown,
    showPopperArrow: false,
    inline: true,
    renderDayContents: (dayOfMonth: number) => <div className="in-month">{dayOfMonth}</div>,
    calendarContainer: DateContainer,
    popperContainer: PopperContainer,
    onChange: handleChange,
    showMonthYearPicker: showMonthYearPicker,
    showYearPicker: showYearPicker,
    renderCustomHeader: (props: ReactDatePickerCustomHeaderProps) => <DateHeader showMonthYearPicker={showMonthYearPicker} monthsShown={monthsShown} showYearPicker={showYearPicker} {...props} />,
  };

  return (
    <>
      <DateInput
        ref={setWrappedRef as Ref<HTMLButtonElement>}
        clear={handleClear}
        onClick={() => setOpen(true)}
        value={inputValue}
        placeholder={placeholder}
        showClear={showClear}
      />
      <DateWrapper isOpen={isOpen} handleClose={() => setOpen(false)} itemRef={wrappedRef}>
        <Container>
          <Picker
            {...defaults}
            {...rest}
          />
        </Container>
      </DateWrapper>
    </>
  );
};
