import { animated, useTransition, UseTransitionProps } from 'react-spring';

export type FadeProps = {
  children: React.ReactNode;
  inProp?: boolean;
} & UseTransitionProps;

export const Fade: React.FC<FadeProps> = ({ children, inProp, ...rest }) => {
  let transitions = useTransition(inProp, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    reverse: inProp,
    ...rest,
  });

  return transitions(
    (styles: any, item) => item && (
      <animated.div style={styles}>{children}</animated.div>
    ));
};
