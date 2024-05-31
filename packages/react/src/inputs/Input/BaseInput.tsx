import styled from 'styled-components';

export const BaseInput = styled.input`
  width: 100%;
  outline: 2px solid transparent;
  outline-offset: 2px;
  background: transparent;
  color: ${({ theme }) => theme.colors.foreground};
  padding: ${({ theme }) => theme.space[1]} ${({ theme }) => theme.space[3]};
  font-size: ${({ theme }) => theme.fontSizes[1]};
  line-height: ${({ theme }) => theme.lineHeights[1]};
  height: calc(${({ theme }) => theme.sizes[9]} - 2px);
  :placeholder {
    color: ${({ theme }) => theme.colors.mutedForeground};
  }
`;
