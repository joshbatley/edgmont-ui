import React, { forwardRef } from 'react';
import { ClickableElement, OutlineButton } from 'inputs';
import { CalendarIcon } from '@heroicons/react/outline';

export type DateInputProps = {
  placeholder?: string;
  value?: string | null;
  onClick: () => void;
  clear?: () => void;
  showClear?: boolean;
};

export const DateInput = forwardRef<HTMLButtonElement, DateInputProps>(({ value, placeholder, onClick, clear, showClear }, ref) => {
  let handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    clear?.();
  };
  return (
    <OutlineButton ref={ref} onClick={onClick} className="w-full justify-between">
      <div className="flex space-x-4 items-center">
        <CalendarIcon width={16} height={16} className='text-gray-400 mr-2' />
        {value || <span className="text-gray-400">{placeholder}</span>}
      </div>
      {showClear && value && (
        <ClickableElement onClick={handleClear} as="a" className="text-gray-400 hover:text-gray-800">
          Clear
        </ClickableElement>
      )}
    </OutlineButton>
  );
});

