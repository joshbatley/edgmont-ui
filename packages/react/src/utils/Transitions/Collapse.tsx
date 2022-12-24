import React from 'react';
import { useMeasure } from 'react-use';
import { animated, useSpring, UseSpringProps } from 'react-spring';
import { usePrevious } from 'shared/usePrevious';
import styled from 'styled-components';

export type CollapseProps = {
  children: React.ReactNode;
  inProp?: boolean;
} & UseSpringProps;

const Container = styled(animated.div)`
  overflow:hidden;
`;

export const Collapse: React.FC<CollapseProps> = ({ children, inProp = false, ...rest }) => {
  let previous = usePrevious(inProp);
  let [ref, { height: viewHeight }] = useMeasure();
  let { height } = useSpring({
    from: { height: 0 },
    to: { height: inProp ? viewHeight : 0 },
    ...rest,
  });

  return (
    <Container
      style={{
        height: inProp && previous === inProp ? 'auto' : height,
      }}
    >
      <animated.div ref={ref as any} children={children} />
    </Container>
  );
};
