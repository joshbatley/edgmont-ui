import React, { Ref, useState } from 'react';
import { usePopper } from 'react-popper';
import { Placement } from '@popperjs/core';
import { Portal } from 'utils';
import styled from 'styled-components';

export type TooltipProps = {
  tooltip: React.ReactNode;
  direction?: Placement;
  dark?: boolean;
  as?: AsProp;
  disabled?: boolean;
} & WithChildren;

const Popover = styled.div<{ dark: boolean }>`
  border-radius: ${({ theme }) => theme.radii[2]};
  box-shadow: ${({ theme }) => theme.shadows[1]};
  padding: ${({ theme }) => `${theme.space[2]} ${theme.space[3]}`};
  z-index: 10;
  font-size: ${({ theme }) => theme.fontSizes[1]};
  line-height: ${({ theme }) => theme.lineHeights[1]};
  ${({ dark, theme }) => dark ? `
    color: #fff;
    background: ${theme.colors.base};
  ` : `
    background: #fff;
  `}
`;

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
          <Popover
            dark={dark}
            ref={setPopperRef as Ref<HTMLDivElement>}
            style={styles.popper}
            {...attributes.popper}
          >
            {tooltip}
          </Popover>
        </Portal>
      )
      }
    </>
  );
};
