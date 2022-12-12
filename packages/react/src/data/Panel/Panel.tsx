import styled from 'styled-components';

export const Panel = styled.div`
  border-radius:${({ theme }) => theme.radii[2]};
  background:${({ theme }) => theme.colors.white};
  box-shadow:${({ theme }) => theme.shadows[1]};
`;
