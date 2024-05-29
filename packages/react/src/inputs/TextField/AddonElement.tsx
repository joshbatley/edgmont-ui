import styled from 'styled-components';
import { Box } from '../../data';

export type AddonElementProps = {
  addon: React.ReactNode;
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
`;

export const AddonElement: React.FC<AddonElementProps> = ({
  addon,
}) =>
  addon ? (
    <StyledBox bg="muted" color="mutedForeground" display="flex" alignItems="center">
      {addon}
    </StyledBox>
  ) : null;
