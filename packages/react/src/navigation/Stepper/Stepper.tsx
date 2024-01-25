import styled from 'styled-components';
import { StepperContext } from './StepperContext';
import { Colors, WithChildren } from '../../types';
import { Children, isValidElement, cloneElement } from 'react';

type StepperPropsVertical = {
  color?: Colors;
  step: number;
  direction?: 'vertical';
} & WithChildren;

type StepperPropsHorizontal = {
  color?: Colors;
  step: number;
  direction?: 'horizontal';
  alternativeLabel?: boolean;
} & WithChildren;

export type StepperProps = StepperPropsVertical | StepperPropsHorizontal;

const parseChildren = (children: React.ReactNode, step: number): any[] => {
  return Children.toArray(children).map((node, idx) => {
    if (!isValidElement(node)) {
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
        {items.map(({ node, ...itemRest }) => cloneElement(node, { ...itemRest, color }))}
      </StyledDiv>
    </StepperContext.Provider>
  );
};
