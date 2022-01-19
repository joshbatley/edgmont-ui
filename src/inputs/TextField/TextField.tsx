import React, { forwardRef, ReactElement, ReactNode } from 'react';
import classNames from 'classnames';
import { BaseInput, BaseInputProps } from './BaseInput';

export type TextFieldProps = {
  error?: boolean,
  before?: ReactElement,
  after?: ReactElement,
  prefixIcon?: ReactNode,
  suffixIcon?: ReactNode,
  size?: Size,
  type?: 'text' | 'password' | 'number' | 'email',
} & BaseInputProps;

const defaults = 'border border-gray-300 shadow-sm rounded-md bg-white text-gray-400 flex ';
const beforeClasses = 'border-r border-gray-300 bg-gray-100 text-gray-500 rounded-l-md flex items-center';
const afterClasses = 'border-l border-gray-300 bg-gray-100 text-gray-500 rounded-r-md flex items-center';
const IconClasses = 'flex items-center';
const focusWith = 'focus-with:outline-none focus-within:ring focus-within:z-10';
const errorClasses = 'text-red-500 border-red-300 shadow-sm shadow-red-200';
const disabledClasses = 'bg-gray-200 cursor-not-allowed';

function applySizeClass(size?: Size): string {
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
}

const OptionalIcon: React.FC<{ icon: ReactNode, sizingClasses: string }> = ({ icon, sizingClasses }) =>
  icon ? (<div className={classNames(sizingClasses, IconClasses)}>{icon}</div>) : null;

const AddonElement: React.FC<{ containerClasses: string, addonClasses: string, addon: ReactNode, disabled?: boolean }> = ({
  containerClasses, addonClasses, addon, disabled,
}) =>
  addon ? (
    <div className={containerClasses}>
      {React.cloneElement(addon as ReactElement, { className: classNames(addonClasses), disabled })}
    </div>
  ) : null;

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(({
  prefixIcon, suffixIcon,
  before, after, className,
  size, disabled, error,
  ...rest
}, ref) => {
  let sizingClasses = applySizeClass(size);
  let focus = 'focus-with:outline-none focus-within:ring focus-within:z-10';
  if (before && !after) {
    focus += ' rounded-r-md';
  }
  if (!before && after) {
    focus += ' rounded-l-md';
  }
  return (
    <div className={classNames(defaults, { [focusWith]: !(before || after) }, { [errorClasses]: error }, { [disabledClasses]: disabled }, className)}>
      <OptionalIcon sizingClasses={sizingClasses} icon={prefixIcon} />
      <AddonElement
        disabled={disabled}
        containerClasses={classNames(beforeClasses, focusWith)}
        addonClasses={classNames(sizingClasses, 'rounded-r-none rounded-l-md focus:ring-0')}
        addon={before}
      />

      <div className={classNames('flex-grow', { [focus]: before || after })}>
        <BaseInput className={classNames(sizingClasses, { 'text-red-800': error }, { 'pointer-events-none': disabled })} disabled={disabled} ref={ref} {...rest} />
      </div>

      <OptionalIcon sizingClasses={sizingClasses} icon={suffixIcon} />
      <AddonElement
        disabled={disabled}
        containerClasses={classNames(afterClasses, focusWith)}
        addonClasses={classNames(sizingClasses, 'rounded-l-none rounded-r-md focus:ring-0')}
        addon={after}
      />
    </div>
  );
});
