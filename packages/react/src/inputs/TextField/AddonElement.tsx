import styled from 'styled-components';
import { Box } from '../../data';

export type AddonElementProps = {
  position: 'left' | 'right';
  addon: React.ReactNode;
};

const StyledBox = styled(Box) <{ pos: 'left' | 'right' }>`
  overflow: hidden;
  ${({ theme, pos }) => pos === 'left' ? `
    border-top-left-radius: ${theme.radii[3]};
    border-bottom-left-radius: ${theme.radii[3]};
  ` : `
    border-top-right-radius: ${theme.radii[3]};
    border-bottom-right-radius: ${theme.radii[3]};
  `}

  &:focus {
    z-index:0;
    outline: none;
    box-shadow: ${({ theme }) => theme.shadows.focus};
  }

  button:focus {
    outline: none;
    box-shadow: none;
  }
`;

export const AddonElement: React.FC<AddonElementProps> = ({
  addon, position,
}) =>
  addon ? (
    <StyledBox pos={position} bg="secondary" color="mutedForeground" display="flex" alignItems="center">
      {addon}
    </StyledBox>
  ) : null;
