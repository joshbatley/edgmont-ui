import styled from 'styled-components';
import { variant } from 'styled-system';
import { TextComp } from '../../data';
import { Colors, WithChildren } from '../../types';

export type ChipProps = {
  color?: Colors;
} & WithChildren;

export const Container = styled.div<{ color: Colors }>`
  border-radius: ${({ theme }) => theme.radii[3]};
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  padding: calc(${({ theme }) => theme.space[1]} / 2) ${({ theme }) => theme.space[2]};
  font-size: ${({ theme }) => theme.fontSizes[0]};
  line-height: ${({ theme }) => theme.lineHeights[0]};
  font-weight: 700;


  > :not([hidden]) ~ :not([hidden]) {
    margin-left: 0.5rem;
  }
  ${({ theme }) => variant({
  prop: 'color',
  variants: {
    error: {
      color: 'background',
      bg: 'destructive',
    },
    secondary: {
      color: 'secondaryForeground',
      bg: 'secondary',
    },
    primary: {
      color: 'background',
      bg: 'foreground',
    },
  },
})}
`;


export const Chip: React.FC<ChipProps> = ({
  color = 'primary', children,
}) => (
  <Container color={color}>
    <TextComp>{children}</TextComp>
  </Container>
);

