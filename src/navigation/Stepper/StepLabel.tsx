import React from 'react';
import classNames from 'classnames';
import { StepIcon } from './StepIcon';
import { useStepperContext } from './StepperContext';

export type StepLabelProps = {
  icon?: React.ReactNode;
  idx?: number;
  state?: 'completed' | 'active' | 'default';
  error?: boolean;
  color?: Colors;
};

export const StepLabel: React.FC<StepLabelProps> = ({
  icon, children, idx = 0, state, error, color,
}) => {
  let { direction, alternativeLabel, noOfItems } = useStepperContext();

  let lineAlternativeClasses = classNames(
    'bg-gray-300 absolute top-3 flex-auto',
    direction === 'vertical' ? 'h-full w-px' : 'h-px',
  );
  let lineClasses = classNames(
    'bg-gray-300 flex-auto w-px',
    direction === 'vertical' ? 'h-full' : 'h-px',
  );
  let lineContainerClass = classNames(
    'flex-auto flex mx-3 w-px',
    !alternativeLabel && ' items-center',
    direction === 'vertical' && 'my-3',
  );
  let labelClasses = classNames(
    'flex items-center justify-center relative text-sm',
    alternativeLabel ? 'flex-col flex-1' : 'space-x-2',
  );
  let lineStyles = { left: 'calc(-50% + 30px)', right: 'calc(50% + 30px)' };

  if (alternativeLabel) {
    return (
      <div className={labelClasses}>
        {idx !== 0 && <div className={lineAlternativeClasses} style={{ ...lineStyles }} />}
        <StepIcon number={idx + 1} icon={icon} state={state} error={error} color={color} />
        {children}
      </div>
    );
  }
  return (
    <>
      <div className={labelClasses}>
        <StepIcon number={idx + 1} icon={icon} state={state} error={error} color={color} />
        <span>{children}</span>
      </div>
      {idx !== noOfItems && (
        <div className={lineContainerClass}>
          <div className={lineClasses} style={{ ...lineStyles }} />
        </div>
      )}
    </>
  );
};
