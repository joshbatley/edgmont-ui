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
        color: 'white',
        bg: 'primary',
        ':hover': {
          bg: 'primaryAccent',
        },
      },
      success: {
        color: 'white',
        bg: 'success',
        ':hover': {
          bg: 'successAccent',
        },
      },
      info: {
        color: 'white',
        bg: 'info',
        ':hover': {
          bg: 'infoAccent',
        },
      },
      error: {
        color: 'white',
        bg: 'error',
        ':hover': {
          bg: 'errorAccent',
        },
      },
      warning: {
        color: 'white',
        bg: 'warning',
        ':hover': {
          bg: 'warningAccent',
        },
      },
      base: {
        color: 'white',
        bg: 'base',
        ':hover': {
          bg: 'baseHighlight',
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
    loaderColor={color}
    {...rest}
  >
    {children}
  </StyledButton>
));
