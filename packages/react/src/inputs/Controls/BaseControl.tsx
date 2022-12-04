import React from 'react';
import clsx from 'clsx';

export type BaseControlProps = {
  labelText?: string;
  color?: ColorsLegacy;
  icon: React.ReactElement;
  rounded?: boolean;
  error?: boolean;
} & React.ComponentPropsWithRef<'input'>;

const classes: Record<ColorsLegacy, string> = {
  primary: 'peer-checked:bg-primary-500 group-hover:peer-checked:bg-primary-600',
  gray: 'peer-checked:bg-gray-500 group-hover:peer-checked:bg-gray-600',
  green: 'peer-checked:bg-green-500 group-hover:peer-checked:bg-green-600',
  lime: 'peer-checked:bg-lime-500 group-hover:peer-checked:bg-lime-600',
  red: 'peer-checked:bg-red-500 group-hover:peer-checked:bg-red-600',
  yellow: 'peer-checked:bg-yellow-500 group-hover:peer-checked:bg-yellow-600',
  blue: 'peer-checked:bg-blue-500 group-hover:peer-checked:bg-blue-600',
  purple: 'peer-checked:bg-purple-500 group-hover:peer-checked:bg-purple-600',
  orange: 'peer-checked:bg-orange-500 group-hover:peer-checked:bg-orange-600',
  pink: 'peer-checked:bg-pink-500 group-hover:peer-checked:bg-pink-600',
};

const iconText: Record<ColorsLegacy, string> = {
  primary: 'group-hover:text-primary-500',
  gray: 'group-hover:text-gray-500',
  green: 'group-hover:text-green-500',
  lime: 'group-hover:text-lime-500',
  red: 'group-hover:text-red-500',
  yellow: 'group-hover:text-yellow-500',
  blue: 'group-hover:text-blue-500',
  purple: 'group-hover:text-purple-500',
  orange: 'group-hover:text-orange-500',
  pink: 'group-hover:text-pink-500',
};

export const BaseControl: React.FC<BaseControlProps> = ({
  labelText, color = 'primary', icon, rounded = false, disabled, error, ...rest
}) => {
  let boxClasses = clsx(
    'bg-white w-full h-full absolute',
    disabled ? 'bg-gray-300 peer-checked:bg-gray-400' : classes[color],
    { 'peer-checked:bg-red-500 group-hover:peer-checked:bg-red-600': error },
  );
  let btnClasses = clsx(
    'relative h-4 w-4 border bg-white overflow-hidden shadow-sm flex items-center justify-center mr-2',
    rounded ? 'rounded-full' : 'rounded-md',
    { 'border-red-300 shadow-red-200': error },
  );
  let labelClasses = clsx(
    disabled ? 'cursor-not-allowed' : 'cursor-pointer',
    'group flex space-x-2 items-center',
  );
  let iconClasses = clsx(
    { [iconText[color]]: !disabled },
    'text-transparent z-10 relative peer-checked:text-white',
  );
  return (
    <label className={labelClasses}>
      <div className={btnClasses}>
        <input className="peer hidden" disabled={disabled} {...rest} />
        <div className={boxClasses} />
        {React.cloneElement(icon, { width: 16, height: 16, className: iconClasses })}
      </div>
      {labelText}
    </label>
  );
};
