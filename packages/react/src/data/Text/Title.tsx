import React from 'react';
import styled from 'styled-components';
import { variant } from 'styled-system';

type TagType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export type HeadingProps = {
  children?: React.ReactNode;
  as?: TagType;
  className?: string;
};

const Component = styled.h1`
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

export const Title: React.FC<HeadingProps> = ({ children, as = 'h1', ...params }) => (
  <Component as={as} {...params}>
    {children}
  </Component>
);

