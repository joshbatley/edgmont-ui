import styled from 'styled-components';
import { variant } from 'styled-system';
import { Box } from '../../data';
import { Size } from '../../types';

export type OptionalIconProps = {
  icon: React.ReactNode;
  size: Size;
  position: 'left' | 'right';
};

const StyledBox = styled(Box) <{ pos: 'left' | 'right' }>`
  ${({ theme, pos }) => pos === 'left' ? `
    border-right: ${theme.borders.background3[1]};
    border-top-left-radius: ${theme.radii[3]};
    border-bottom-left-radius: ${theme.radii[3]};
  ` : `
    border-left: ${theme.borders.background3[1]};
    border-top-right-radius: ${theme.radii[3]};
    border-bottom-right-radius: ${theme.radii[3]};
  `}
  ${variant({
  prop: 'size',
  variants: {
    small: {
      px: 2,
      py: 1,
    },
    medium: {
      px: 3,
      py: 2,
    },
    large: {
      px: 6,
      py: 4,
    },
  },
})}
`;

export const OptionalIcon: React.FC<OptionalIconProps> = ({ icon, size, position }) =>
  icon ? (<StyledBox pos={position} color="base" bg="background.3" display="flex" alignItems="center" size={size}>{icon}</StyledBox>) : null;
