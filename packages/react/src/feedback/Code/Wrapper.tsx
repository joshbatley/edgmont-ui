import styled from 'styled-components';
import { WithChildren } from '../../types';

type WrapperProps = {
  style: React.CSSProperties;
  skip?: boolean;
} & WithChildren;

const StyledDiv = styled.div`
  font-size: ${({ theme }) => theme.fontSizes[1]};
  line-height: ${({ theme }) => theme.lineHeights[1]};
  padding: ${({ theme }) => theme.space[2]};
  font-family: ${({ theme }) => theme.fonts.mono};
`;

export const Wrapper: React.FC<WrapperProps> = ({
  children, style, skip,
}) => skip ? <>{children}</> : (
  <StyledDiv style={style}>
    {children}
  </StyledDiv>
);
