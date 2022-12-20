import React from 'react';
import styled from 'styled-components';
import { Box } from 'data/Box';
import { variant } from 'styled-system';

export type OptionalIconProps = {
  icon: React.ReactNode;
  size: Size;
};

const StyledBox = styled(Box)`
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

export const OptionalIcon: React.FC<OptionalIconProps> = ({ icon, size }) =>
  icon ? (<StyledBox color="background.3" display="flex" alignItems="center" size={size}>{icon}</StyledBox>) : null;
