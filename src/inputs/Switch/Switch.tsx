import React from 'react';
import classNames from 'classnames';
import { applyColor } from 'shared/colorpicker';

export type SwitchProps = {
  color?: Colors,
  size?: 'small' | 'medium';
} & Omit<React.ComponentPropsWithRef<'input'>, 'size'>;

function getSizes(size: string) {
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
}

export const Switch: React.FC<SwitchProps> = ({
  color = 'green', size = 'medium', disabled,
  ...rest
}) => {
  let colorsToggle = applyColor(color, '400', 'bg');
  let colorsRing = applyColor(color, '400', 'ring');
  let { height, width, widthBg } = getSizes(size);

  let labelClasses = classNames(
    height, widthBg,
    'relative inline-flex items-center align-center cursor-pointer',
    { 'cursor-not-allowed opacity-40': disabled },
  );
  let backClasses = classNames(
    height,
    `transition-all w-full ring-2 ring-gray-300 rounded-full bg-gray-300 absolute peer-checked:${colorsToggle} peer-checked:${colorsRing}`,
  );
  let btnClasses = classNames(
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
