import React, { useRef } from 'react';
import { animated, useSpring, UseSpringProps } from 'react-spring';

export type CollapseProps = {
  children: React.ReactNode;
  inProp?: boolean;
} & UseSpringProps;

export const Collapse: React.FC<CollapseProps> = ({ children, inProp, ...rest }) => {
  let ref = useRef<HTMLDivElement>(null);
  let styles = useSpring({
    from: { height: 0 },
    to: { height: inProp ? ref.current?.scrollHeight : 0 },
    ...rest,
  });

  return (
    <animated.div
      ref={ref}
      className="overflow-hidden group"
      style={styles}
    >
      {children}
    </animated.div>
  );
};
