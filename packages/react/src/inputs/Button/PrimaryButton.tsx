import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { variant } from 'styled-system';
import { BaseButton, BaseButtonProps } from './BaseButton';

export type PrimaryButtonProps = Omit<BaseButtonProps, 'loaderColor'> & {
  color?: ColorsAndWhite
};

const StyledButton = styled(BaseButton)<PrimaryButtonProps>(
  variant({
    prop: 'color',
    variants: {
      primary: {
        color: 'white',
        bg: 'primary',
        ':hover': {
          bg: 'primaryDark',
        },
      },
      success: {
        color: 'white',
        bg: 'success',
        ':hover': {
          bg: 'successDark',
        },
      },
      info: {
        color: 'white',
        bg: 'info',
        ':hover': {
          bg: 'infoDark',
        },
      },
      error: {
        color: 'white',
        bg: 'error',
        ':hover': {
          bg: 'errorDark',
        },
      },
      warning: {
        color: 'white',
        bg: 'warning',
        ':hover': {
          bg: 'warningDark',
        },
      },
      dark: {
        color: 'white',
        bg: 'base',
        ':hover': {
          bg: 'baseLight',
        },
      },
      white: {
        color: 'base',
        bg: 'white',
        ':hover': {
          bg: 'offwhite',
        },
      },
    },
  }),
);

export const PrimaryButton = forwardRef<HTMLButtonElement, PrimaryButtonProps>(({
  children, color = 'primary', ...rest
}, ref) => (
  <StyledButton
    ref={ref}
    color={color}
    loaderColor={color === 'white' ? 'base' : color}
    {...rest}
  >
    {children}
  </StyledButton>
));
