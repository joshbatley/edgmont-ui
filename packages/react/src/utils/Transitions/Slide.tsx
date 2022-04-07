import React, { useRef } from 'react';
import { animated, useTransition, useSpring, UseTransitionProps, useSpringRef, useChain } from 'react-spring';

export type SlideProps = {
  children: React.ReactNode;
  inProp?: boolean;
} & UseTransitionProps;

export const Slide: React.FC<SlideProps> = ({ children, inProp, ...rest }) => {
  let ref = useRef<HTMLDivElement>(null);
  let springRef = useSpringRef();
  let { height } = useSpring({
    ref: springRef,
    from: { height: ref.current?.scrollHeight },
    to: { height: 0 },
  });

  let transRef = useSpringRef();
  let transitions = useTransition(inProp, {
    ref: transRef,
    from: { translateX: '100%' },
    enter: { translateX: '0' },
    leave: { translateX: '100%' },
    reverse: inProp,
    ...rest,
  });

  useChain(inProp ? [transRef] : [transRef, springRef], [0, 0.2]);

  return transitions(
    (styles: any, item) => item && (
      <animated.div
        ref={ref}
        style={{ ...styles, height: height }}
      >
        {children}
      </animated.div>
    ));
};
