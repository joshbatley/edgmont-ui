import styled from 'styled-components';
import { Box } from '../../data';
import { rgba } from 'polished';

export type OptionalIconProps = {
  icon: React.ReactNode;
};

const StyledBox = styled(Box)`
  padding: ${({ theme }) => theme.space[2]} ${({ theme }) => theme.space[3]};
  color: ${({ theme }) => rgba(theme.colors.mutedForeground, 0.7)};
`;

export const OptionalIcon: React.FC<OptionalIconProps> = ({ icon }) =>
  icon ? (<StyledBox display="flex" alignItems="center">{icon}</StyledBox>) : null;
