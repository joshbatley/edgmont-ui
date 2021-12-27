import classNames from 'classnames';
import React from 'react';
import { applyColor } from 'utils/colorpicker';

export type BaseControlProps = {
  labelText?: string;
  color?: Colors;
  icon: React.ReactElement;
  rounded?: boolean;
  error?: boolean;
} & React.ComponentPropsWithRef<'input'>;

export const BaseControl: React.FC<BaseControlProps> = ({
  labelText, color = 'blue', icon, rounded = false, disabled, error, ...rest
}) => {
  let colorClass = applyColor(color, '500', 'bg');
  let colorHightlightClass = applyColor(color, '600', 'bg');

  let boxClasses = classNames(
    'bg-white w-full h-full absolute',
    disabled ? 'bg-gray-300 peer-checked:bg-gray-400' : `peer-checked:${colorClass} group-hover:peer-checked:${colorHightlightClass}`,
    error && 'peer-checked:bg-red-500 group-hover:peer-checked:bg-red-600',
  );
  let btnClasses = classNames(
    'relative h-4 w-4 border bg-white overflow-hidden shadow-sm flex items-center justify-center mr-2',
    rounded ? 'rounded-full ' : 'rounded-md',
    error && 'border-red-300 shadow-red-200',
  );
  let labelClasses = classNames(
    disabled ? 'cursor-not-allowed' : 'cursor-pointer',
    'group flex space-x-2 items-center',
  );
  let iconClasses = classNames(
    disabled || `group-hover:text-${color}-500`,
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
