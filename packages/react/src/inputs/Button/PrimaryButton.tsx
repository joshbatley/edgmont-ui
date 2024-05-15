import { forwardRef } from 'react';
import styled from 'styled-components';
import { variant } from 'styled-system';
import { BaseButton, BaseButtonProps } from './BaseButton';
import { Colors } from '../../types';

export type PrimaryButtonProps = Omit<BaseButtonProps, 'loaderColor'> & {
  color?: Colors
};

const StyledButton = styled(BaseButton)<PrimaryButtonProps>(
  variant({
    prop: 'color',
    variants: {
      primary: {
        color: 'background',
        bg: 'primary',
        ':hover': {
          bg: 'primaryAccent',
        },
      },
      error: {
        color: 'background',
        bg: 'destructive',
        ':hover': {
          bg: 'errorAccent',
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
