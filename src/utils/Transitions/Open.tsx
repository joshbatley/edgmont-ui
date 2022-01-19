import React from 'react';
import { animated, useTransition, UseTransitionProps } from 'react-spring';

export type OpenProps = {
  children: React.ReactNode;
  inProp?: boolean;
  className?: string;
} & UseTransitionProps;

export const Open: React.FC<OpenProps> = ({ children, inProp, className, ...rest }) => {
  let transitions = useTransition(inProp, {
    from: { translateX: '100%' },
    enter: { translateX: '0%' },
    leave: { translateX: '100%' },
    reverse: inProp,
    ...rest,
  });

  return transitions(
    (styles: any, item) => item && (
      <animated.div style={styles} className={className}>
        {children}
      </animated.div >
    ));
};
