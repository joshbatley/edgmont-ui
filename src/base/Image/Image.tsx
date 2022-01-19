import React, { useState } from 'react';

export type ImageProps = {
  fallback?: React.ReactNode;
} & React.ComponentPropsWithoutRef<'img'>;

export const Image: React.FC<ImageProps> = ({ fallback, ...rest }) => {
  let [hasError, setError] = useState(false);

  return (hasError && fallback) ? <>{fallback}</> : (
    <img onError={() => setError(true)} {...rest} />
  );
};
