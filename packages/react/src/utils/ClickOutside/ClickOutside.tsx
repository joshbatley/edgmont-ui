import React, { useEffect, useState } from 'react';
import { Grow, Portal } from 'utils';

export type ClickOutsideProps = {
  handleClose: () => void;
  target: Element | null;
  wrapper?: React.ReactElement;
  inline?: boolean;
} & WithChildren;

export const ClickOutside: React.FC<ClickOutsideProps> = ({ children, handleClose, target, wrapper, inline = false }) => {
  let [isOpen, setOpen] = useState(true);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      e.preventDefault();
      if (!target?.contains(e.target as Node)) {
        setOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClick);
    } else {
      document.removeEventListener('mousedown', handleClick);
    }
    return () => document.removeEventListener('mousedown', handleClick);
  }, [isOpen, handleClose, target]);

  let WrappedTransition = (
    <Grow inProp={isOpen} onDestroyed={handleClose}>
      {children}
    </Grow>
  );

  let content = wrapper ?
    React.cloneElement(wrapper, { children: (WrappedTransition) }) :
    WrappedTransition;

  return inline ? content : (
    <Portal>
      {content}
    </Portal >
  );
};
