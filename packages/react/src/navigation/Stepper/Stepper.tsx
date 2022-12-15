import React from 'react';
import { StepperContext } from '.';
import styled from 'styled-components';

type StepperPropsVertical = {
  color?: ColorsLegacy;
  step: number;
  direction?: 'vertical';
} & WithChildren;

type StepperPropsHorizontal = {
  color?: ColorsLegacy;
  step: number;
  direction?: 'horizontal';
  alternativeLabel?: boolean;
} & WithChildren;

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

const StyledDiv = styled.div <{ direction: 'vertical' | 'horizontal' }> `
  display: flex;
  postion:relative;
  ${({ direction }) => direction === 'vertical' && `
    flex-direction: column;
    height: 100%;
    alignItems: flex-start;
  `}
`;

export const Stepper: React.FC<StepperProps> = ({
  children, color = 'primary', direction = 'horizontal', step, ...rest
}) => {
  let alternativeLabel = rest.hasOwnProperty('alternativeLabel') ? (rest as StepperPropsHorizontal).alternativeLabel : false;
  let items = parseChildren(children, step);
  return (
    <StepperContext.Provider value={{
      noOfItems: items.length - 1, activeStep: step, color, direction, alternativeLabel,
    }}>
      <StyledDiv direction={direction}>
        {items.map(({ node, ...itemRest }) => React.cloneElement(node, { ...itemRest, color }))}
      </StyledDiv>
    </StepperContext.Provider>
  );
};
