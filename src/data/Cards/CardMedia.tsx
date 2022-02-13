import React, { CSSProperties } from 'react';
import classnames from 'classnames';

type MediaComponent = 'video' | 'audio' | 'picture' | 'iframe' | 'img' | 'div';

export type CardMediaProps = {
  imageUrl?: string;
  className?: string;
  as: MediaComponent
  image?: string;
  src?: string;
  alt?: string;
  style?: CSSProperties,
};

const MEDIA_COMPONENTS = ['video', 'audio', 'picture', 'iframe', 'img'];
const IMAGE_COMPONENTS = ['picture', 'img'];

export const CardMedia: React.FC<CardMediaProps> = ({
  children, className, as: Component = 'div', image, src, style, ...rest
}) => {

  let isImageComponent = IMAGE_COMPONENTS.indexOf(Component) !== -1;
  let isMediaComponent = MEDIA_COMPONENTS.indexOf(Component) !== -1;
  const bgImage = !isMediaComponent && image ? { backgroundImage: `url("${image}")` } : {};
  return (
    <Component
      style={{ ...style, ...bgImage }}
      src={isMediaComponent ? image || src : undefined}
      className={classnames(isImageComponent && 'object-cover', isMediaComponent && 'w-full', 'block bg-cover bg-no-repeat bg-center', className)}
      {...rest}
    >
      {children}
    </Component>
  );
};