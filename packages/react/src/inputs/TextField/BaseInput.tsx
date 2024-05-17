import styled from 'styled-components';

export const BaseInput = styled.input<{
  error: boolean; disabled: boolean;
}>`
  width: 100%;
  outline: 2px solid transparent;
  outline-offset: 2px;
  color: ${({ theme }) => theme.colors.foreground};
  background: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.radii[3]};
  color: ${({ error, theme }) => error ? theme.colors.destructive : 'inherit'};
  pointer-event: ${({ disabled }) => disabled ? 'none' : 'inherit'};
  padding: ${({ theme }) => theme.space[1]} ${({ theme }) => theme.space[3]};
  height: ${({ theme }) => theme.sizes[9]};
  :placeholder{
    color: ${({ theme }) => theme.colors.mutedForeground};
  }
`;
