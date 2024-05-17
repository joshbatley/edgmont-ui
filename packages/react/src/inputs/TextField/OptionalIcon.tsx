import styled from 'styled-components';
import { Box } from '../../data';
import { rgba } from 'polished';

export type OptionalIconProps = {
  icon: React.ReactNode;
  position: 'left' | 'right';
};

const StyledBox = styled(Box) <{ pos: 'left' | 'right' }>`
  padding: ${({ theme }) => theme.space[2]} ${({ theme }) => theme.space[3]};
  color: ${({ theme }) => rgba(theme.colors.mutedForeground, 0.7)};
  ${({ theme, pos }) => pos === 'left' ? `
    border-top-left-radius: ${theme.radii[3]};
    border-bottom-left-radius: ${theme.radii[3]};
  ` : `
    border-top-right-radius: ${theme.radii[3]};
    border-bottom-right-radius: ${theme.radii[3]};
  `}
`;

export const OptionalIcon: React.FC<OptionalIconProps> = ({ icon, position }) =>
  icon ? (<StyledBox pos={position} bg="background" display="flex" alignItems="center">{icon}</StyledBox>) : null;
