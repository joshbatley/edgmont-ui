import React from 'react';
import classNames from 'classnames';
import {
  ExclamationCircleIcon,
  ExclamationIcon,
  InformationCircleIcon,
  CheckCircleIcon,
  XIcon,
} from 'base/Icons/Solid';
import { Text } from 'base';
import { applyColor } from 'utils/colorpicker';
import { ClickableElement, ClickableElementProps } from 'inputs';

export type AlertProps = {
  severity?: Severity;
  title?: string;
  icon?: React.ReactNode;
  withClose?: () => void;
};

function getIcon(severity: Severity) {
  let props = {
    height: 22,
    width: 22,
  };
  switch (severity) {
    case 'error':
      return <ExclamationCircleIcon {...props} />;
    case 'warning':
      return <ExclamationIcon {...props} />;
    case 'info':
      return < InformationCircleIcon {...props} />;
    case 'success':
      return <CheckCircleIcon {...props} />;
  }
}

function getColor(severity: Severity): Colors {
  switch (severity) {
    case 'error':
      return 'red';
    case 'warning':
      return 'yellow';
    case 'info':
      return 'blue';
    case 'success':
      return 'green';
  }
}

const CloseBtn: React.FC<ClickableElementProps> = ({ onClick }) => (
  <ClickableElement className="float-right py-1 px-2" onClick={onClick}>
    <XIcon width={16} height={16} />
  </ClickableElement>
);

export const Alert: React.FC<AlertProps> = ({
  severity, title, icon, children, withClose, ...rest
}) => {
  let classes = 'px-2 py-2 flex items-center shadow rounded bg-white overflow-hidden relative max-w-sm text-sm flex-wrap border';
  let IconClass = 'mr-3 mt-px leading-8 self-center float-left empty:m-0';
  let TitleClass = 'leading-6 font-bold';
  let TextClass = 'min-w-full';

  if (severity === undefined) {
    return (
      <div className={classNames(classes, 'bg-gray-600 text-white')} {...rest}>
        <div className="min-w-full">
          <div className={IconClass}>{icon}</div>
          <Text as="strong" className={TitleClass}>{title}</Text>
          {withClose && (<CloseBtn onClick={withClose} />)}
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
    <div className={classNames(classes, bgColor, textColor, borderColor)} {...rest}>
      <div className="min-w-full">
        <div className={IconClass}>{Icon}</div>
        <Text as="strong" className={TitleClass}>{title}</Text>
        {withClose && (<CloseBtn onClick={withClose} />)}
      </div>
      <Text className={TextClass}>{children}</Text>
    </div>
  );
};
