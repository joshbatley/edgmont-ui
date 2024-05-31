import { forwardRef } from 'react';
import styled, { DefaultTheme, StyledComponent } from 'styled-components';
import {
  border, BorderProps, color, ColorProps, flexbox, FlexboxProps, layout, LayoutProps, position, PositionProps, space, SpaceProps, typography, TypographyProps, boxShadow, BoxShadowProps,
} from 'styled-system';
import { AsProp } from '../../types';

export type BaseButtonProps = {
  type?: 'button' | 'reset' | 'submit';
  as?: AsProp;
} & React.ComponentPropsWithoutRef<'button'> & LayoutProps & BorderProps & PositionProps & ColorProps & SpaceProps & TypographyProps & FlexboxProps & BoxShadowProps;

export const StyledButton: StyledComponent<'button', DefaultTheme, BaseButtonProps, never> = styled.button<BaseButtonProps>`
  display: inline-flex;
  place-content: center;
  align-items: center;
  user-select: none;
  border-radius: ${({ theme }) => theme.radii[3]};
  padding: ${({ theme }) => `${theme.space[2]} ${theme.space[3]}`};
  font-size: ${({ theme }) => theme.fontSizes[1]};
  line-height: ${({ theme }) => theme.lineHeights[1]};
  font-weight: 500;
  > :not([hidden]) ~ :not([hidden]) {
    margin-left: 0.5rem;
  }
  ${({ disabled }) => disabled && 'cursor: not-allowed;'}
  ${layout}
  ${border}
  ${position}
  ${color}
  ${space}
  ${typography}
  ${flexbox}
  ${boxShadow}
`;

export const BaseButton: React.ForwardRefExoticComponent<React.PropsWithoutRef<BaseButtonProps> & React.RefAttributes<HTMLButtonElement>> = forwardRef<HTMLButtonElement, BaseButtonProps>(({
  children, disabled, ...rest
}, ref) => {
  return (
    <StyledButton ref={ref} disabled={disabled} {...rest}>
      {children}
    </StyledButton>
  );
});

