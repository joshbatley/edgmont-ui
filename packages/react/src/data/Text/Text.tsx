import React from 'react';
import styled from 'styled-components';
import { color, ColorProps } from 'styled-system';

export type TextProps = {
  children?: React.ReactNode;
  as?: AsProp;
  className?: string;
} & ColorProps;

const Component = styled.p<{ mono?: boolean }>`
  font-family: ${({ mono, theme }) => mono ? theme.fonts.mono : ''};
  ${color}
`;

export const Text: React.FC<TextProps> = ({ children, as = 'p', ...params }) => (
  <Component as={as} {...params}>
    {children}
  </Component>
);

export const TextInline: React.FC<TextProps> = ({ children, as = 'span', ...params }) => (
  <Component as={as} {...params}>
    {children}
  </Component>
);

export const TextMono: React.FC<TextProps> = ({ children, as = 'p', ...params }) => (
  <Component as={as} mono {...params}>
    {children}
  </Component>
);
