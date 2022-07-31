import React from 'react';
import clsx from 'clsx';
import { StepIcon, useStepperContext } from '.';

export type StepLabelProps = {
  icon?: React.ReactNode;
  idx?: number;
  state?: 'completed' | 'active' | 'default';
  error?: boolean;
  color?: Colors;
} & WithChildren;

export const StepLabel: React.FC<StepLabelProps> = ({
  icon, children, idx = 0, state, error, color = 'primary',
}) => {
  let { direction, alternativeLabel, noOfItems } = useStepperContext();

  let lineAlternativeClasses = clsx(
    'bg-gray-300 absolute top-3 flex-auto',
    direction === 'vertical' ? 'h-full w-px' : 'h-px',
  );
  let lineClasses = clsx(
    'bg-gray-300 flex-auto w-px',
    direction === 'vertical' ? 'h-full' : 'h-px',
  );
  let lineContainerClass = clsx(
    'flex-auto flex mx-3 w-px',
    !alternativeLabel && ' items-center',
    direction === 'vertical' && 'my-3',
  );
  let labelClasses = clsx(
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
