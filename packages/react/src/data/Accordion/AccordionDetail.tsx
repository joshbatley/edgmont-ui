import styled from 'styled-components';

export const AccordionDetail = styled.div`
  background: ${({ theme }) => theme.colors.background};
  padding: ${({ theme }) => `${theme.space[3]} ${theme.space[2]}`};
  border-bottom: ${({ theme }) => theme.borders.border[1]};
  border-left: ${({ theme }) => theme.borders.border[1]};
  border-right: ${({ theme }) => theme.borders.border[1]};
  box-shadow: ${({ theme }) => theme.shadows.inner};
`;

export const DetailsGrouping = styled.div`
  :last-of-type ${AccordionDetail} {
    border-bottom-left-radius: ${({ theme }) => theme.radii[3]};
    border-bottom-right-radius: ${({ theme }) => theme.radii[3]};
  }
`;
