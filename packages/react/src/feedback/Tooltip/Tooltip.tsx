import { Ref, useState } from 'react';
import { usePopper } from 'react-popper';
import { Placement } from '@popperjs/core';
import styled from 'styled-components';
import { Portal } from '../../utils';
import { AsProp, WithChildren } from '../../types';

export type TooltipProps = {
  tooltip: React.ReactNode;
  direction?: Placement;
  as?: AsProp;
  disabled?: boolean;
} & WithChildren;

const Popover = styled.div`
  border-radius: ${({ theme }) => theme.radii[2]};
  box-shadow: ${({ theme }) => theme.shadows.base[0]};
  border: ${({ theme }) => theme.borders.border[1]};
  padding: ${({ theme }) => `${theme.space[2]} ${theme.space[3]}`};
  z-index: 10;
  font-size: ${({ theme }) => theme.fontSizes[1]};
  line-height: ${({ theme }) => theme.lineHeights[1]};
  background: ${({ theme }) => theme.colors.background};
`;

export const Tooltip: React.FC<TooltipProps> = ({
  tooltip, children, direction = 'top', as: Component = 'div', disabled,
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
        style={{ cursor: 'pointer' }}
        ref={setWrappedRef as Ref<HTMLDivElement>}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </Component>
      {(!disabled && showTooltip) && (
        <Portal>
          <Popover
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
