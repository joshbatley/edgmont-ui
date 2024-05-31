import styled from 'styled-components';

export const TextArea = styled.textarea`
  box-shadow: ${({ theme }) => theme.shadows.base[0]};
  border: ${({ theme }) => theme.borders.border[1]};
  padding: ${({ theme }) => theme.space[2]};
  width: 100%;
  min-height: ${({ theme }) => theme.sizes[16]};
  background: ${({ theme }) => theme.colors.background};
  font-size: ${({ theme }) => theme.fontSizes[1]};
  line-height: ${({ theme }) => theme.lineHeights[1]};
  border-radius: ${({ theme }) => theme.radii[3]};
  :focus {
    outline: 2px solid transparent;
    outline-offset: 2px;
    border-color: ${({ theme }) => theme.colors.primary};
    z-index: 10;
  }
`;
