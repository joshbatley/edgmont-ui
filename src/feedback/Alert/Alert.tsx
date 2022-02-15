import React from 'react';
import classNames from 'classnames';
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

export const Alert: React.FC<AlertProps> = ({
  severity, title, icon, children, withClose, dark, className, ...rest
}) => {
  let classes = 'px-2 py-2 flex flex-grow items-center shadow rounded bg-white overflow-hidden relative w-96 text-sm flex-wrap border';
  let IconClass = 'mr-3 mt-px leading-8 self-center float-left empty:m-0';
  let TitleClass = 'leading-6 tracking-wide';
  let TextClass = 'min-w-full mt-2 empty:mt-0';

  if (severity === undefined) {
    return (
      <div className={classNames(classes, dark ? 'bg-gray-600 text-white' : 'bg-white text-gray-900', className)} {...rest}>
        <div className="min-w-full">
          <div className={IconClass}>{icon}</div>
          <Text as="strong" className={TitleClass}>{title}</Text>

          {withClose && (<span className="text-gray-500"><CloseBtn onClick={withClose} /></span>)}
        </div>
        <Text className={TextClass}>{children}</Text>
      </div>
    );
  }

  let color = getColor(severity);
  let bgColor = applyColor(color, '50', 'bg');
  let textColor = applyColor(color, '500', 'text');
  let borderColor = applyColor(color, '500', 'border');
  let Icon = icon || getIcon(severity);

  return (
    <div className={classNames(classes, bgColor, textColor, borderColor, className)} {...rest}>
      <div className="min-w-full">
        <div className={IconClass}>{Icon}</div>
        <Text as="strong" className={classNames('text-sm', TitleClass)}>{title}</Text>
        {withClose && (<CloseBtn onClick={withClose} />)}
      </div>
      <Text className={TextClass}>{children}</Text>
    </div>
  );
};
