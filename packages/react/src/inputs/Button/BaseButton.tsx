import { forwardRef } from 'react';
import styled, { DefaultTheme, StyledComponent } from 'styled-components';
import {
  border, BorderProps, color, ColorProps, flexbox, FlexboxProps, layout, LayoutProps, position, PositionProps, space, SpaceProps, typography, TypographyProps, variant,
} from 'styled-system';
import { AsProp, Size } from '../../types';

export type BaseButtonProps = {
  size?: Size | 'none';
  type?: 'button' | 'reset' | 'submit';
  as?: AsProp;
} & React.ComponentPropsWithoutRef<'button'> & LayoutProps & BorderProps & PositionProps & ColorProps & SpaceProps & TypographyProps & FlexboxProps;

export const StyledButton: StyledComponent<'button', DefaultTheme, BaseButtonProps, never> = styled.button<BaseButtonProps>`
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
  ${flexbox}
`;

export const BaseButton: React.ForwardRefExoticComponent<React.PropsWithoutRef<BaseButtonProps> & React.RefAttributes<HTMLButtonElement>> = forwardRef<HTMLButtonElement, BaseButtonProps>(({
  children, size = 'medium', disabled, ...rest
}, ref) => {
  return (
    <StyledButton size={size} ref={ref} disabled={disabled}  {...rest}>
      {children}
    </StyledButton>
  );
});

