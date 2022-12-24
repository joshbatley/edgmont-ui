import React from 'react';
import styled from 'styled-components';
import { ColorProps, TypographyProps, color, typography, variant } from 'styled-system';


export type HeadingProps = {
  children?: React.ReactNode;
} & ColorProps & TypographyProps;

export const Title = styled.h1<HeadingProps>`
  ${color}
  ${typography}
  ${variant({
  prop: 'as',
  variants: {
    h1: { fontSize: 5 },
    h2: { fontSize: 4 },
    h3: { fontSize: 3 },
    h4: { fontSize: 2 },
    h5: { fontSize: 1 },
    h6: { fontSize: 0 },
  },
})}
`;
