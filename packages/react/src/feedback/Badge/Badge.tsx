import React from 'react';
import styled from 'styled-components';
import { variant } from 'styled-system';
import { Box } from '../../data';

export type BadgeProps = {
  color?: Colors;
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
  color: Colors;
  position: IntercardinalPoints;
}>`
  position: absolute;
  border-radius: ${({ theme }) => theme.radii[8]};
  font-size: ${({ theme }) => theme.fontSizes[0]};
  line-height:  ${({ theme }) => theme.lineHeights[0]};
  text-align: center;
  color: ${({ theme }) => theme.colors.base};
  min-width: fit-content;
  width: ${({ theme }) => theme.sizes[5]};
  padding: calc(${({ theme }) => theme.space[1]} / 2) ${({ theme }) => theme.space[1]};

  :empty {
    width: ${({ theme }) => theme.sizes[1]};
    height: ${({ theme }) => theme.sizes[2]};
  }
  ${({ position }) => getPosition(position)}
  ${variant({
  prop: 'color',
  variants: {
    primary: {
      bg: 'primary',
    },
    success: {
      bg: 'success',
    },
    info: {
      bg: 'info',
    },
    error: {
      bg: 'error',
    },
    warning: {
      bg: 'warning',
    },
    base: {
      bg: 'base',
    },
  },
})}
`;

export const Badge: React.FC<BadgeProps> = ({
  color = 'primary', position = 'NE', children, tag,
}) => (
  <Box display="inline-block" position="relative">
    <BadgeItem color={color} position={position}>
      {tag}
    </BadgeItem>
    {children}
  </Box>
);
