import React, { forwardRef } from 'react';
import { darken } from 'polished';
import styled from 'styled-components';
import { variant } from 'styled-system';
import { BaseButton, BaseButtonProps } from './BaseButton';

export type SecondaryButtonProps = Omit<BaseButtonProps, 'loaderColor'> & {
  color?: Colors
};

const StyledButton = styled(BaseButton)<SecondaryButtonProps>(({ theme }) =>
  variant({
    prop: 'color',
    variants: {
      primary: {
        color: 'primary',
        bg: 'primaryHighlight',
        ':hover': {
          bg: darken(0.1, theme.colors.primaryHighlight),
        },
      },
      success: {
        color: 'success',
        bg: 'successHighlight',
        ':hover': {
          bg: darken(0.1, theme.colors.successHighlight),
        },
      },
      info: {
        color: 'info',
        bg: 'infoHighlight',
        ':hover': {
          bg: darken(0.1, theme.colors.infoHighlight),
        },
      },
      error: {
        color: 'error',
        bg: 'errorHighlight',
        ':hover': {
          bg: darken(0.1, theme.colors.errorHighlight),
        },
      },
      warning: {
        color: 'warning',
        bg: 'warningHighlight',
        ':hover': {
          bg: darken(0.1, theme.colors.warningHighlight),
        },
      },
      dark: {
        color: 'dark',
        bg: 'background.3',
        ':hover': {
          bg: darken(0.1, theme.colors.background[3]),
        },
      },
    },
  }),
);


export const SecondaryButton = forwardRef<HTMLButtonElement, SecondaryButtonProps>(({
  children, color = 'primary', ...rest
}, ref) => (
  <StyledButton
    ref={ref}
    color={color}
    loaderColor={color}
    {...rest}
  >
    {children}
  </StyledButton>
));

