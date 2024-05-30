import styled from 'styled-components';
import { TextComp } from '../../data';
import { WithChildren } from '../../types';

export type ChipProps = {
  destructive?: boolean;
} & WithChildren;

export const Container = styled.div<{ destructive?: boolean }>`
  border-radius: ${({ theme }) => theme.radii[3]};
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  padding: calc(${({ theme }) => theme.space[1]} / 2) ${({ theme }) => theme.space[2]};
  font-size: ${({ theme }) => theme.fontSizes[0]};
  line-height: ${({ theme }) => theme.lineHeights[0]};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.background};
  background: ${({ theme, destructive }) => destructive ? theme.colors.destructive : theme.colors.primary};

  > :not([hidden]) ~ :not([hidden]) {
    margin-left: 0.5rem;
  }
`;

export const Chip: React.FC<ChipProps> = ({
  destructive, children,
}) => (
  <Container destructive={destructive}>
    <TextComp>{children}</TextComp>
  </Container>
);

