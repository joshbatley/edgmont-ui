import React from 'react';
import { animated, useSpring, UseSpringProps } from 'react-spring';

export type LinearSlideProps = {
  children: React.ReactNode;
  className?: string;
} & UseSpringProps;

export const LinearSlide: React.FC<LinearSlideProps> = ({ children, className, ...rest }) => {
  let styles = useSpring({
    from: { translateX: '-100%', left: '0' },
    to: { translateX: '100', left: '100%' },
    config: { duration: 2000 },
    loop: true,
    ...rest,
  });

  return (
    <animated.div style={styles} className={className}>{children}</animated.div >
  );
};
