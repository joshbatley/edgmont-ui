import styled from 'styled-components';
import { color, ColorProps, typography, TypographyProps as Q } from 'styled-system';

export type TypographyProps = {
  mono?: boolean;
} & ColorProps & Q;

export const Typography = styled.p<TypographyProps>`
  font-family: ${({ mono, theme }) => mono ? theme.fonts.mono : ''};
  ${color}
  ${typography}
`;
