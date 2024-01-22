import React, { useState } from 'react';
import styled from 'styled-components';
import { LayoutProps, layout } from 'styled-system';
import { WithChildren } from '../../types';

type MediaComponent = 'video' | 'audio' | 'picture' | 'iframe' | 'img' | 'div';

export type CardMediaProps = {
  imageUrl?: string;
  as: MediaComponent
  image?: string;
  src?: string;
  alt?: string;
  fallback?: React.ReactNode;
} & WithChildren & LayoutProps;

type Props = {
  isImageComponent?: boolean;
  isMediaComponent?: boolean;
  showBgImagine?: boolean;
};

const MEDIA_COMPONENTS = ['video', 'audio', 'picture', 'iframe', 'img'];
const IMAGE_COMPONENTS = ['picture', 'img'];

const Component = styled.div<CardMediaProps & Props>`
  ${layout}
  object-fit: ${({ isImageComponent }) => isImageComponent ? 'cover' : 'unset'};
  display: block;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  ${({ image, showBgImagine }) => showBgImagine ? `background-image: url("${image}");` : ''}
`;

export const CardMedia: React.FC<CardMediaProps> = ({
  children, as, image, src, fallback, ...rest
}) => {
  let [errored, setError] = useState(false);
  let isImageComponent = IMAGE_COMPONENTS.indexOf(as) !== -1;
  let isMediaComponent = MEDIA_COMPONENTS.indexOf(as) !== -1;
  let showBgImagine = !isMediaComponent && image !== undefined;

  return errored ? <>{fallback}</> : (
    <Component
      as={as}
      onError={() => setError(true)}
      src={src}
      isImageComponent={isImageComponent}
      isMediaComponent={isMediaComponent}
      showBgImagine={showBgImagine}
      {...rest}
    >
      {children}
    </Component>
  );
};
