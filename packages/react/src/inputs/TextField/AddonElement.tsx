import React from 'react';
import styled from 'styled-components';
import { Box } from 'data/Box';

export type AddonElementProps = {
  position: 'left' | 'right';
  addon: React.ReactNode;
};

const StyledBox = styled(Box) <{ pos: 'left' | 'right' }>`
  overflow: hidden;
  ${({ theme, pos }) => pos === 'left' ? `
    border-right: ${theme.borders.gray[1]};
    border-top-left-radius: ${theme.radii[3]};
    border-bottom-left-radius: ${theme.radii[3]};
  ` : `
    border-left: ${theme.borders.gray[1]};
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
    <StyledBox pos={position} bg="offwhite" color="baseLight" display="flex" alignItems="center">
      {addon}
    </StyledBox>
  ) : null;
