import React from 'react';
import clsx from 'clsx';
import { Text } from 'data';
import { getIcon } from './utils';
import { CloseBtn } from './CloseBtn';

export type AlertProps = {
  severity?: Severity;
  title?: string;
  icon?: React.ReactNode;
  dark?: boolean;
  withClose?: () => void;
  className?: string;
};

const classes: Record<Severity, string> = {
  error: 'bg-red-50 text-red-500 border-red-500',
  warning: 'bg-orange-50 text-orange-500 border-orange-500',
  info: 'bg-blue-50 text-blue-500 border-blue-500',
  success: 'bg-green-50 text-green-500 border-green-500',
};

export const Alert: React.FC<AlertProps> = ({
  severity, title, icon, children, withClose, dark, className, ...rest
}) => {

  let wrapperClasses = 'px-2 py-2 flex flex-grow items-center shadow rounded bg-white overflow-hidden relative w-96 text-sm flex-wrap border';
  let iconClasses = 'mr-3 mt-px leading-8 self-center float-left empty:m-0';
  let titleClasses = 'leading-6 tracking-wide';
  let textClasses = 'min-w-full mt-2 empty:mt-0';

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

  return (
    <div className={clsx(wrapperClasses, classes[severity], className)} {...rest}>
      <div className="min-w-full">
        <div className={iconClasses}>{icon || getIcon(severity)}</div>
        <Text as="strong" className={clsx('text-sm', titleClasses)}>{title}</Text>
        {withClose && (<CloseBtn onClick={withClose} />)}
      </div>
      <Text className={textClasses}>{children}</Text>
    </div>
  );
};
