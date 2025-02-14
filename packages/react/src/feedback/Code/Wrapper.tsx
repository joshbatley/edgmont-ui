import styled from 'styled-components';
import { WithChildren } from '../../types';

type WrapperProps = {
  style?: React.CSSProperties;
  skip?: boolean;
} & WithChildren;

const StyledDiv = styled.div`
  overflow: hidden;
  font-size: ${({ theme }) => theme.fontSizes[1]};
  line-height: ${({ theme }) => theme.lineHeights[1]};
  font-family: ${({ theme }) => theme.fonts.mono};
  border: ${({ theme }) => theme.borders.border[1]};
  box-shadow: ${({ theme }) => theme.shadows.base[1]};
  border-radius: ${({ theme }) => theme.radii[3]};
  background: ${({ theme }) => theme.colors.offsetBackground};
`;

export const Wrapper: React.FC<WrapperProps> = ({
  children, skip,
}) => skip ? <>{children}</> : (
  <StyledDiv >
    {children}
  </StyledDiv>
);
