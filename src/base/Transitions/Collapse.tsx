import React, { useRef } from 'react';
import { Transition } from 'react-transition-group';
import { TransitionProps } from 'react-transition-group/Transition';

export type CollapseProps = {
  children: React.ReactNode;
  inProp?: boolean;
} & Omit<TransitionProps, 'addEndListener'>;

function getAutoHeightDuration(height?: number) {
  if (!height) {
    return 100;
  }
  const constant = height / 36;
  return Math.round((4 + 15 * constant ** 0.25 + constant / 5) * 10);
}

function handleAddEndListener(node: any, done: any) {
  node.addEventListener('transitionend', done, false);
}

export const Collapse: React.FC<CollapseProps> = ({ children, inProp, ...rest }) => {
  let wrapperRef = useRef<HTMLDivElement>(null);
  let scrollHeight = wrapperRef.current?.scrollHeight || 0;
  let transitionDuration = `${getAutoHeightDuration(scrollHeight)}ms`;

  function applyAnimation(state: any) {
    return {
      style: {
        height: state === 'entering' || state === 'entered' ? scrollHeight : '0',
        transitionDuration,
      },
    };
  }

  return (
    <Transition in={inProp} {...rest} addEndListener={handleAddEndListener}>
      {(state) => (
        <div className="overflow-hidden group" {...applyAnimation(state)} ref={wrapperRef}>{children}</div>
      )}
    </Transition>
  );
};
