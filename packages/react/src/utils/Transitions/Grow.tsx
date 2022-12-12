import React from 'react';
import { animated, useTransition, UseTransitionProps } from 'react-spring';
import styled from 'styled-components';

export type GrowProps = {
  children: React.ReactNode;
  inProp?: boolean;
} & UseTransitionProps;

const Container = styled(animated.div)`
   transform-origin: top left;
`;

export const Grow: React.FC<GrowProps> = ({ children, inProp, ...rest }) => {
  let transitions = useTransition(inProp, {
    from: { opacity: 0, transform: 'scale(0)' },
    enter: { opacity: 1, transform: 'scale(1)' },
    leave: { opacity: 0, transform: 'scale(0)' },
    config: {
      duration: 100,
    },
    reverse: inProp,
    ...rest,
  });

  return transitions(
    (styles: any, item) => item && (
      <Container style={styles}>{children}</Container>
    ));
};
