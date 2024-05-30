import styled from 'styled-components';
import { Box } from '../../data';

export type AddonElementProps = {
  addon: React.ReactNode;
  left?: boolean;
  right?: boolean;
};

const StyledBox = styled(Box)`
  &:focus {
    z-index:0;
    outline: none;
  }

  button:focus {
    outline: none;
    box-shadow: none;
  }

  :hover {
    opacity: 0.8;
  }
`;

export const AddonElement: React.FC<AddonElementProps> = ({
  addon, left, right,
}) =>
  addon ? (
    <StyledBox bg="rgba(0,0,0,0.02)" borderRight={right ? 'none' : 'border.1'} borderLeft={left ? 'none' : 'border.1'} display="flex" alignItems="center">
      {addon}
    </StyledBox>
  ) : null;
