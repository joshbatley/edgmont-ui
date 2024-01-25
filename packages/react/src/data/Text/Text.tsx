import styled from 'styled-components';
import { color, ColorProps, typography, TypographyProps } from 'styled-system';

export type TextProps = {
  mono?: boolean;
} & ColorProps & TypographyProps;

export const TextComp = styled.p<TextProps>`
  font-family: ${({ mono, theme }) => mono ? theme.fonts.mono : ''};
  ${color}
  ${typography}
`;
