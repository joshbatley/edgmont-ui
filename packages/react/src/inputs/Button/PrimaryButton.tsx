import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { variant } from 'styled-system';
import { BaseButton, BaseButtonProps } from './BaseButton';

export type PrimaryButtonProps = Omit<BaseButtonProps, 'loaderColor'> & {
  color?: Colors
};

const StyledButton = styled(BaseButton)<PrimaryButtonProps>(
  variant({
    prop: 'color',
    variants: {
      primary: {
        color: 'base',
        bg: 'primary',
        ':hover': {
          bg: 'primaryAccent',
        },
      },
      success: {
        color: 'base',
        bg: 'success',
        ':hover': {
          bg: 'successAccent',
        },
      },
      info: {
        color: 'base',
        bg: 'info',
        ':hover': {
          bg: 'infoAccent',
        },
      },
      error: {
        color: 'base',
        bg: 'error',
        ':hover': {
          bg: 'errorAccent',
        },
      },
      warning: {
        color: 'base',
        bg: 'warning',
        ':hover': {
          bg: 'warningAccent',
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
    {...rest}
  >
    {children}
  </StyledButton>
));
