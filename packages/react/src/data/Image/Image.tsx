import React, { useState } from 'react';
import styled from 'styled-components';
import {
  FlexboxProps,
  GridProps,
  LayoutProps,
  OrderProps,
  PositionProps,
  SpaceProps,
  flexbox, grid, layout, order, position, space,
} from 'styled-system';

export type ImageProps = {
  fallback?: React.ReactNode;
} & React.ComponentPropsWithoutRef<'img'> & FlexboxProps & GridProps & LayoutProps & OrderProps & PositionProps & SpaceProps;

const Img = styled.img`
  ${space}
  ${layout}
  ${order}
  ${grid}
  ${flexbox}
  ${position}
`;

export const Image: React.FC<ImageProps> = ({ fallback, ...rest }) => {
  let [hasError, setError] = useState(false);

  return (hasError && fallback) ? <>{fallback}</> : (
    <Img onError={() => setError(true)} {...rest} />
  );
};
