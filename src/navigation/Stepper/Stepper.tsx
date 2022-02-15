import React from 'react';
import classNames from 'classnames';
import { StepperContext } from '.';

type StepperPropsVertical = {
  color?: Colors;
  step: number;
  direction?: 'vertical';
};

type StepperPropsHorizontal = {
  color?: Colors;
  step: number;
  direction?: 'horizontal';
  alternativeLabel?: boolean;
};

export type StepperProps = StepperPropsVertical | StepperPropsHorizontal;

const parseChildren = (children: React.ReactNode, step: number): any[] => {
  return React.Children.toArray(children).map((node, idx) => {
    if (!React.isValidElement(node)) {
      return null;
    }
    let completed = step > idx && 'completed';
    let active = step === idx && 'active';
    return {
      state: completed || active || 'default',
      idx,
      ...node.props,
      node,
    };
  });
};

export const Stepper: React.FC<StepperProps> = ({
  children, color = 'blue', direction = 'horizontal', step, ...rest
}) => {
  let alternativeLabel = rest.hasOwnProperty('alternativeLabel') ? (rest as StepperPropsHorizontal).alternativeLabel : false;
  let items = parseChildren(children, step);
  let directionClass = classNames(direction === 'vertical' && 'flex-col h-full items-start');
  return (
    <StepperContext.Provider value={{
      noOfItems: items.length - 1, activeStep: step, color, direction, alternativeLabel,
    }}>
      <div className={classNames(directionClass, 'flex relative')}>
        {items.map(({ node, ...itemRest }) => React.cloneElement(node, { ...itemRest, color }))}
      </div>
    </StepperContext.Provider>
  );
};
