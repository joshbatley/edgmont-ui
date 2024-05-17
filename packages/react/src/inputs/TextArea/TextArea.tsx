import styled from 'styled-components';

export const TextArea = styled.textarea`
  box-shadow: ${({ theme }) => theme.shadows.base[0]};
  border: ${({ theme }) => theme.borders.border[1]};
  padding: ${({ theme }) => theme.space[2]};
  width: 100%;
  height: ${({ theme }) => theme.sizes[16]};
  background: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.radii[3]};
  :focus {
    outline: 2px solid transparent;
    outline-offset: 2px;
    box-shadow: ${({ theme }) => theme.shadows.focus};
    z-index: 10;
  }
`;
