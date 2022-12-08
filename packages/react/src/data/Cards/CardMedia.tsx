import React, { useState } from 'react';
import clsx from 'clsx';
import styled from 'styled-components';

type MediaComponent = 'video' | 'audio' | 'picture' | 'iframe' | 'img' | 'div';

export type CardMediaProps = {
  imageUrl?: string;
  className?: string;
  as: MediaComponent
  image?: string;
  src?: string;
  alt?: string;
  fallback?: React.ReactNode;
} & WithChildren;

type Props = {
  isImageComponent?: boolean;
  isMediaComponent?: boolean;
  showBgImagine?: boolean;
};

const MEDIA_COMPONENTS = ['video', 'audio', 'picture', 'iframe', 'img'];
const IMAGE_COMPONENTS = ['picture', 'img'];

const Component = styled.div<CardMediaProps & Props>`
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
