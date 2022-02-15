import React from 'react';
import clsx from 'clsx';
import { applyColor } from 'shared/colorpicker';
import { Text } from 'data';
import { getColor, getIcon } from './utils';
import { CloseBtn } from './CloseBtn';

export type AlertProps = {
  severity?: Severity;
  title?: string;
  icon?: React.ReactNode;
  dark?: boolean;
  withClose?: () => void;
  className?: string;
};

let wrapperClasses = 'px-2 py-2 flex flex-grow items-center shadow rounded bg-white overflow-hidden relative w-96 text-sm flex-wrap border';
let iconClasses = 'mr-3 mt-px leading-8 self-center float-left empty:m-0';
let titleClasses = 'leading-6 tracking-wide';
let textClasses = 'min-w-full mt-2 empty:mt-0';

export const Alert: React.FC<AlertProps> = ({
  severity, title, icon, children, withClose, dark, className, ...rest
}) => {
  if (severity === undefined) {
    return (
      <div
        className={clsx(wrapperClasses, dark ? 'bg-gray-600 text-white' : 'bg-white text-gray-900', className)}
        {...rest}
      >
        <div className="min-w-full">
          <div className={iconClasses}>{icon}</div>
          <Text as="strong" className={titleClasses}>{title}</Text>
          {withClose && (<span className="text-gray-500"><CloseBtn onClick={withClose} /></span>)}
        </div>
        <Text className={textClasses}>{children}</Text>
      </div>
    );
  }

  let color = getColor(severity);
  let bgColor = applyColor(color, '50', 'bg');
  let textColor = applyColor(color, '500', 'text');
  let borderColor = applyColor(color, '500', 'border');
  let Icon = icon || getIcon(severity);

  return (
    <div className={clsx(wrapperClasses, bgColor, textColor, borderColor, className)} {...rest}>
      <div className="min-w-full">
        <div className={iconClasses}>{Icon}</div>
        <Text as="strong" className={clsx('text-sm', titleClasses)}>{title}</Text>
        {withClose && (<CloseBtn onClick={withClose} />)}
      </div>
      <Text className={textClasses}>{children}</Text>
    </div>
  );
};
