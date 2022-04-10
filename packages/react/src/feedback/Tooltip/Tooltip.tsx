import React, { Ref, useState } from 'react';
import { usePopper } from 'react-popper';
import { Placement } from '@popperjs/core';
import clsx from 'clsx';
import { Portal } from 'utils';

export type TooltipProps = {
  tooltip: React.ReactNode;
  direction?: Placement;
  dark?: boolean;
  as?: AsProp;
  disabled?: boolean;
};

export const Tooltip: React.FC<TooltipProps> = ({
  tooltip, children, direction = 'top', dark = false, as: Component = 'div', disabled,
}) => {
  let [showTooltip, setTooltip] = useState(false);
  let [wrappedRef, setWrappedRef] = useState(null);
  let [popperRef, setPopperRef] = useState(null);
  let { styles, attributes } = usePopper(wrappedRef, popperRef, {
    placement: direction,
  });

  let handleMouseEnter = () => setTooltip(true);
  let handleMouseLeave = () => setTooltip(false);

  return (
    <>
      <Component
        className="cursor-pointer"
        ref={setWrappedRef as Ref<HTMLDivElement>}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </Component>
      {(!disabled && showTooltip) && (
        <Portal>
          <div
            className={clsx('rounded shadow-md px-3 py-2 z-10 text-sm', dark ? 'text-white bg-gray-700' : 'bg-white')}
            ref={setPopperRef as Ref<HTMLDivElement>}
            style={styles.popper}
            {...attributes.popper}
          >
            {tooltip}
          </div>
        </Portal>
      )
      }
    </>
  );
};
