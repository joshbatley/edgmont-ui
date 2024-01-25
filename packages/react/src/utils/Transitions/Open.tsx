import { animated, useTransition, UseTransitionProps } from 'react-spring';

export type OpenProps = {
  children: React.ReactNode;
  inProp?: boolean;
  direction?: 'left' | 'right';
} & UseTransitionProps;

export const Open: React.FC<OpenProps> = ({ children, direction = 'right', inProp, ...rest }) => {
  let transitions = useTransition(inProp, {
    from: { translateX: direction === 'right' ? '100%' : '-100%' },
    enter: { translateX: direction === 'right' ? '0%' : '0%' },
    leave: { translateX: direction === 'right' ? '100%' : '-100%' },
    reverse: inProp,
    ...rest,
  });

  return transitions(
    (styles: any, item) => item && (
      <animated.div style={styles}>
        {children}
      </animated.div >
    ));
};
