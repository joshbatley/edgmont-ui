import React from 'react';
import clsx from 'clsx';

export type SwitchProps = {
  color?: ColorsLegacy;
  size?: 'small' | 'medium';
} & Omit<React.ComponentPropsWithRef<'input'>, 'size'>;

const getSizes = (size: string) => {
  if (size === 'medium') {
    return {
      height: 'h-6',
      width: 'w-6',
      widthBg: 'w-12',
    };
  }
  return {
    height: 'h-4',
    width: 'w-4',
    widthBg: 'w-7',
  };
};

const classes: Record<ColorsLegacy, string> = {
  primary: 'peer-checked:bg-primary-400 peer-checked:ring-primary-400',
  gray: 'peer-checked:bg-gray-400 peer-checked:ring-gray-400',
  green: 'peer-checked:bg-green-400 peer-checked:ring-green-400',
  lime: 'peer-checked:bg-lime-400 peer-checked:ring-lime-400',
  red: 'peer-checked:bg-red-400 peer-checked:ring-red-400',
  yellow: 'peer-checked:bg-yellow-400 peer-checked:ring-yellow-400',
  blue: 'peer-checked:bg-blue-400 peer-checked:ring-blue-400',
  purple: 'peer-checked:bg-purple-400 peer-checked:ring-purple-400',
  orange: 'peer-checked:bg-orange-400 peer-checked:ring-orange-400',
  pink: 'peer-checked:bg-pink-400 peer-checked:ring-pink-400',
};

export const Switch: React.FC<SwitchProps> = ({
  color = 'primary', size = 'medium', disabled,
  ...rest
}) => {
  let { height, width, widthBg } = getSizes(size);

  let labelClasses = clsx(
    height, widthBg,
    'relative inline-flex items-center align-center cursor-pointer',
    { 'cursor-not-allowed opacity-40': disabled },
  );
  let backClasses = clsx(
    height,
    'transition-all w-full ring-2 ring-gray-300 rounded-full bg-gray-300 absolute',
    classes[color],
  );
  let btnClasses = clsx(
    height, width,
    'bg-white transition-all ease-in-out absolute rounded-full shadow right-full translate-x-full peer-checked:right-0 peer-checked:translate-x-0',
  );

  return (
    <label className={labelClasses} >
      <input type="checkbox" className="peer hidden" disabled={disabled} {...rest} />
      <div className={backClasses} />
      <div className={btnClasses} />
    </label >
  );
};
