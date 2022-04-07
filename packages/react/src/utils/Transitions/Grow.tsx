import React from 'react';
import { animated, useTransition, UseTransitionProps } from 'react-spring';

export type GrowProps = {
  children: React.ReactNode;
  inProp?: boolean;
} & UseTransitionProps;

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
      <animated.div className="origin-top-left" style={styles}>{children}</animated.div>
    ));
};
