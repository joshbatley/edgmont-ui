import styled from 'styled-components';
import { Box, BoxProps } from '../../data';
import {WithChildren} from "../../types";

const CenteredDiv = styled(Box) <BoxProps>`
  margin: 0 auto;
  width: 36rem;
`;

export const CenteredWidget: React.FC<BoxProps & WithChildren> = ({ children, ...rest }) => (
  <Box display="flex" alignItems="center" justifyItems="center" height="100vh">
    <CenteredDiv {...rest as any}>{children}</CenteredDiv>
  </Box>
);
