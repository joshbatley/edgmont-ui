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
        bg: 'primaryLight',
        ':hover': {
          bg: darken(0.1, theme.colors.primaryLight),
        },
      },
      success: {
        color: 'success',
        bg: 'successLight',
        ':hover': {
          bg: darken(0.1, theme.colors.successLight),
        },
      },
      info: {
        color: 'info',
        bg: 'infoLight',
        ':hover': {
          bg: darken(0.1, theme.colors.infoLight),
        },
      },
      error: {
        color: 'error',
        bg: 'errorLight',
        ':hover': {
          bg: darken(0.1, theme.colors.errorLight),
        },
      },
      warning: {
        color: 'warning',
        bg: 'warningLight',
        ':hover': {
          bg: darken(0.1, theme.colors.warningLight),
        },
      },
      dark: {
        color: 'dark',
        bg: 'gray',
        ':hover': {
          bg: darken(0.1, theme.colors.gray),
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

