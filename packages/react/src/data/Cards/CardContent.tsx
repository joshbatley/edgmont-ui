import styled from 'styled-components';
import { BorderProps, SpaceProps, border, space } from 'styled-system';

export const CardContent: any = styled.div<SpaceProps & BorderProps>`
  padding-top: ${({ theme }) => theme.space[2]};
  padding-bottom: ${({ theme }) => theme.space[2]};
  padding-left: ${({ theme }) => theme.space[3]};
  padding-right: ${({ theme }) => theme.space[3]};
  ${space}
  ${border}
`;
