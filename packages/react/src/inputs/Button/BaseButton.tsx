import React, { forwardRef } from 'react';
import styled from 'styled-components';
import {
  border, BorderProps, color, ColorProps, layout, LayoutProps, position, PositionProps, space, SpaceProps, typography, TypographyProps, variant,
} from 'styled-system';
import { CircleLoader } from 'feedback';

export type BaseButtonProps = {
  size?: Size;
  isLoading?: boolean;
  type?: 'button' | 'reset' | 'submit';
  as?: AsProp;
  className?: any;
  loaderColor?: Colors;
} & React.ComponentPropsWithoutRef<'button'> & LayoutProps & BorderProps & PositionProps & ColorProps & SpaceProps & TypographyProps;

export const StyledButton = styled.button<BaseButtonProps>`
  display: inline-flex;
  align-items: center;
  user-select: none;
  border-radius: ${({ theme }) => theme.radii[3]};
  > :not([hidden]) ~ :not([hidden]) {
    margin-left: 0.5rem;
  }
  :focus {
    outline: 2px solid transparent;
    outline-offset: 2px;
    box-shadow: ${({ theme }) => theme.shadows.focus};
  }
  ${({ isLoading }) => isLoading && 'cursor: wait;'}
  ${({ disabled }) => disabled && 'cursor: not-allowed;'}
  ${({ theme }) => theme.transition}
  ${variant({
  prop: 'size',
  variants: {
    large: {
      px: 10,
      py: 4,
      fontSize: 3,
      lineHeight: 3,
      fontWeight: '500',
    },
    medium: {
      px: 3,
      py: 2,
      fontSize: 1,
      lineHeight: 1,
      fontWeight: '500',
    },
    small: {
      px: 2,
      py: 1,
      fontSize: 1,
      lineHeight: 1,
    },
  },
})}
  ${layout}
  ${border}
  ${position}
  ${color}
  ${space}
  ${typography}
`;

export const BaseButton = forwardRef<HTMLButtonElement, BaseButtonProps>(({
  children, size = 'medium', isLoading, loaderColor = 'white', disabled, ...rest
}, ref) => {
  return (
    <StyledButton size={size} ref={ref} disabled={isLoading || disabled}  {...rest}>
      {isLoading && (<CircleLoader color={loaderColor as Colors} height={16} width={16} />)}
      {children}
    </StyledButton>
  );
});

