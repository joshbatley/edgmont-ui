import { Portal } from 'base/Portal';
import React, { Ref, useState } from 'react';
import { usePopper } from 'react-popper';
import { Placement } from '@popperjs/core';
import classNames from 'classnames';

type TooltipProps = {
  tooltip: React.ReactNode;
  direction?: Placement;
  dark?: boolean;
};

export const Tooltip: React.FC<TooltipProps> = ({ tooltip, children, direction = 'top', dark = false }) => {
  let [showTooltip, setTooltip] = useState(false);
  const [wrappedRef, setWrappedRef] = useState(null);
  const [popperRef, setPopperRef] = useState(null);
  const { styles, attributes } = usePopper(wrappedRef, popperRef, {
    placement: direction,
  });

  function handleMouseEnter() {
    setTooltip(true);
  }

  function handleMouseLeave() {
    setTooltip(false);
  }

  let classes = classNames(
    'rounded shadow-md px-3 py-2 z-10 text-sm',
    dark ? 'text-white bg-gray-700' : 'bg-white',
  );

  return (
    <>
      <div className="inline-block cursor-pointer" ref={setWrappedRef as Ref<HTMLDivElement>} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {children}
      </div>
      {showTooltip && (
        <Portal>
          <div className={classes} ref={setPopperRef as Ref<HTMLDivElement>} style={styles.popper} {...attributes.popper}>
            {tooltip}
          </div>
        </Portal>
      )}
    </>
  );
};
