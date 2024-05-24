import styled from 'styled-components';
import { LinearSlide } from '../../utils';
import { Box } from '../../data';

export type LinearLoaderProps = {
  height?: string | number;
};

const OuterLine = styled.div`
  border-radius: ${({ theme }) => theme.radii[2]};
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  background: ${({ theme }) => theme.colors.muted};
`;

const InnerLine = styled.div`
  border-radius: ${({ theme }) => theme.radii[2]};
  background: ${({ theme }) => theme.colors.foreground};
`;

const StyledLinearSlider = styled(LinearSlide)`
  width: 33.333333%;
  height: 100%;
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
`;

export const LinearLoader: React.FC<LinearLoaderProps> = ({ height = 5 }) => (
  <Box overflow="hidden" width="100%" position="relative" borderRadius="8" style={{ height }}>
    <OuterLine />
    <StyledLinearSlider>
      <InnerLine style={{ height }} />
    </StyledLinearSlider>
  </Box>
);
