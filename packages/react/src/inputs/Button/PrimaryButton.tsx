import { forwardRef } from 'react';
import styled from 'styled-components';
import { variant } from 'styled-system';
import { rgba } from 'polished';
import { BaseButton, BaseButtonProps } from './BaseButton';
import { BtnType } from '../../types';

export type PrimaryButtonProps = Omit<BaseButtonProps, 'loaderColor'> & {
  btnType?: BtnType
};

const StyledButton = styled(BaseButton) <PrimaryButtonProps>`
${({ theme }) => variant({
  prop: 'btnType',
  variants: {
    primary: {
      color: 'primaryForeground',
      bg: 'primary',
      ':hover': {
        bg: rgba(theme.colors.primary, 0.9),
      },
    },
    secondary: {
      color: 'secondaryForeground',
      bg: 'secondary',
      ':hover': {
        bg: rgba(theme.colors.secondary, 0.9),
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
})}
`;

export const PrimaryButton = forwardRef<HTMLButtonElement, PrimaryButtonProps>(({
  children, btnType = 'primary', ...rest
}, ref) => (
  <StyledButton
    ref={ref}
    btnType={btnType}
    {...rest}
  >
    {children}
  </StyledButton>
));
