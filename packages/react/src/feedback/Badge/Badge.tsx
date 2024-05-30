import styled from 'styled-components';
import { Box } from '../../data';
import { IntercardinalPoints, WithChildren } from '../../types';

export type BadgeProps = {
  position?: IntercardinalPoints;
  tag: React.ReactNode;
} & WithChildren;

const getPosition = (position: IntercardinalPoints) => {
  switch (position) {
    case 'NE':
      return `
      top: 0;
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
    case 'SW':
      return `
        left: 0;
        bottom: 0;
        transform: translateY(50%) translateX(-50%);
      `;
  }
};

const BadgeItem = styled.div<{
  position: IntercardinalPoints;
}>`
  position: absolute;
  border-radius: ${({ theme }) => theme.radii[8]};
  font-size: ${({ theme }) => theme.fontSizes[0]};
  line-height:  ${({ theme }) => theme.lineHeights[0]};
  text-align: center;
  color: ${({ theme }) => theme.colors.background};
  background: ${({ theme }) => theme.colors.destructive};
  min-width: fit-content;
  width: ${({ theme }) => theme.sizes[5]};
  padding: calc(${({ theme }) => theme.space[1]} / 2) ${({ theme }) => theme.space[2]};
  :empty {
    width: ${({ theme }) => theme.sizes[1]};
    height: ${({ theme }) => theme.sizes[2]};
  }
  ${({ position }) => getPosition(position)}
`;

export const Badge: React.FC<BadgeProps> = ({ position = 'NE', children, tag }) => (
  <Box display="inline-block" position="relative">
    <BadgeItem position={position}>
      {tag}
    </BadgeItem>
    {children}
  </Box>
);
