import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { variant } from 'styled-system';
import { CircleLoader } from 'feedback';

export type BaseButtonProps = {
  size?: Size;
  isLoading?: boolean;
  type?: 'button' | 'reset' | 'submit';
  as?: AsProp;
  className?: any;
  loaderColor?: ColorsAndWhiteLegacy;
} & React.ComponentPropsWithoutRef<'button'>;


export const Button = styled.button<BaseButtonProps>`
  display: inline-flex;
  align-items: center;
  user-select: none;
  border-radius ${({ theme }) => theme.radii[3]};
  > :not([hidden]) ~ :not([hidden]) {
    margin-left: 0.5rem;
  }
  &:focus {
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
`;

export const BaseButton = forwardRef<HTMLButtonElement, BaseButtonProps>(({
  children, size = 'medium', isLoading, loaderColor = 'white', disabled, className, ...rest
}, ref) => {
  return (
    <Button size={size} ref={ref} disabled={isLoading || disabled} className={className}  {...rest}>
      {isLoading && (<CircleLoader color={loaderColor} height={16} width={16} />)}
      {children}
    </Button>
  );
});

