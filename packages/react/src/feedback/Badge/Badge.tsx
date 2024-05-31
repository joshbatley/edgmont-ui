import styled from 'styled-components';
import { Box } from '../../data';
import { Position, WithChildren } from '../../types';

export type BadgeProps = {
  position?: Position;
  tag: React.ReactNode;
  destructive?: boolean;
} & WithChildren;

const getPosition = (position: Position) => {
  switch (position) {
    case 'N':
      return `
      top: 0;
      right: 50%;
      transform: translateY(-50%) translateX(50%);
      `;
    case 'NE':
      return `
      top: 0;
      right: 0;
      transform: translateY(-50%) translateX(50%);
      `;
    case 'E':
      return `
      top: 50%;
      right: 0;
      transform: translateY(-50%) translateX(50%);
      `;
    case 'NW':
      return `
      top: 0;
      left: 0;
      transform: translateY(-50%) translateX(-50%);
      `;
    case 'SE':
      return `
      right: 0;
      bottom: 0;
      transform: translateY(50%) translateX(50%);
      `;
    case 'S':
      return `
        left: 50%;
        top: 50%;
        transform: translateY(50%) translateX(-50%);
        `;
    case 'SW':
      return `
        left: 0;
        bottom: 0;
        transform: translateY(50%) translateX(-50%);
      `;
    case 'W':
      return `
          right: 0;
          top: 0;
          transform: translateY(50%) translateX(-50%);
        `;
  }
};

const BadgeItem = styled.div<{
  position: Position; destructive: boolean;
}>`
  position: absolute;
  border-radius: ${({ theme }) => theme.radii[8]};
  font-size: ${({ theme }) => theme.fontSizes[0]};
  line-height:  ${({ theme }) => theme.lineHeights[0]};
  text-align: center;
  color: ${({ theme }) => theme.colors.background};
  background: ${({ theme, destructive }) => destructive ? theme.colors.destructive : theme.colors.primary};
  min-width: fit-content;
  width: ${({ theme }) => theme.sizes[5]};
  padding: calc(${({ theme }) => theme.space[1]} / 2) ${({ theme }) => theme.space[2]};
  z-index:9999;
  :empty {
    width: ${({ theme }) => theme.sizes[1]};
    height: ${({ theme }) => theme.sizes[2]};
  }
  ${({ position }) => getPosition(position)}
`;

export const Badge: React.FC<BadgeProps> = ({ position = 'NE', children, tag, destructive = false }) => (
  <Box display="inline-block" position="relative" width="fill-available">
    <BadgeItem position={position} destructive={destructive}>
      {tag}
    </BadgeItem>
    {children}
  </Box>
);
