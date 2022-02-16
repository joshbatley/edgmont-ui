import React, { forwardRef, ReactElement, ReactNode } from 'react';
import clsx from 'clsx';
import { BaseInput, BaseInputProps } from './BaseInput';
import { AddonElement } from './AddonElement';
import { OptionalIcon } from './OptionalIcon';

export type TextFieldProps = {
  error?: boolean,
  before?: ReactElement,
  after?: ReactElement,
  prefixIcon?: ReactNode,
  suffixIcon?: ReactNode,
  size?: Size,
  type?: 'text' | 'password' | 'number' | 'email',
} & BaseInputProps;

const applySizeClass = (size?: Size) => {
  switch (size) {
    case 'large':
      return 'text-lg px-6 py-4';
    case 'medium':
    default:
      return 'text-sm px-3 py-2';
    case 'small':
      return 'text-sm px-2 py-1';
    case 'none':
      return '';
  }
};

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(({
  prefixIcon, suffixIcon,
  before, after, className,
  size, disabled, error,
  ...rest
}, ref) => {
  let focusWith = 'focus-with:outline-none focus-within:ring focus-within:z-10';
  let sizingClasses = applySizeClass(size);

  let focus = 'focus-with:outline-none focus-within:ring focus-within:z-10';
  if (before && !after) {
    focus += ' rounded-r-md';
  }
  if (!before && after) {
    focus += ' rounded-l-md';
  }
  return (
    <div
      className={clsx(
        'border border-gray-300 shadow-sm rounded-md bg-white text-gray-400 flex',
        { [focusWith]: !(before || after) },
        { 'text-red-500 border-red-300 shadow-sm shadow-red-200': error },
        { 'bg-gray-200 cursor-not-allowed': disabled },
        className,
      )}
    >
      <OptionalIcon sizingClasses={sizingClasses} icon={prefixIcon} />
      <AddonElement
        disabled={disabled}
        containerClasses={clsx('border-r border-gray-300 bg-gray-100 text-gray-500 rounded-l-md flex items-center', focusWith)}
        addonClasses={clsx(sizingClasses, 'rounded-r-none rounded-l-md focus:ring-0')}
        addon={before}
      />

      <div className={clsx('flex-grow', { [focus]: before || after })}>
        <BaseInput className={clsx(sizingClasses, { 'text-red-800': error }, { 'pointer-events-none': disabled })} disabled={disabled} ref={ref} {...rest} />
      </div>

      <OptionalIcon sizingClasses={sizingClasses} icon={suffixIcon} />
      <AddonElement
        disabled={disabled}
        containerClasses={clsx('border-l border-gray-300 bg-gray-100 text-gray-500 rounded-r-md flex items-center', focusWith)}
        addonClasses={clsx(sizingClasses, 'rounded-l-none rounded-r-md focus:ring-0')}
        addon={after}
      />
    </div>
  );
});
