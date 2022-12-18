import styled from 'styled-components';
import { variant } from 'styled-system';

export const BaseInput = styled.input<{
  variant: Size; error: boolean; disabled: boolean;
}>`
  width: 100%;
  outline: 2px solid transparent;
  outline-offset: 2px;
  color: ${({ theme }) => theme.colors.base};
  border-radius: ${({ theme }) => theme.radii[3]};
  color: ${({ error, theme }) => error ? theme.colors.error : 'inherit'};
  pointer-event: ${({ disabled }) => disabled ? 'none' : 'inherit'};
  ${variant({
  prop: 'variant',
  variants: {
    small: {
      px: 2,
      py: 1,
      fontSize: 1,
      lineHeight: 1,
    },
    medium: {
      px: 3,
      py: 2,
      fontSize: 1,
      lineHeight: 1,
    },
    large: {
      px: 6,
      py: 4,
      fontSize: 4,
      lineHeight: 4,
    },
  },
})
  }
`;
