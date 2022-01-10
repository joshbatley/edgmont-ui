import React from 'react';

type WrapperProps = {
  style: React.CSSProperties;
  skip?: boolean;
};

export const Wrapper: React.FC<WrapperProps> = ({
  children, style, skip,
}) => skip ? <>{children}</> : (
  <div className="font-mono text-sm p-2" style={style}>
    {children}
  </div>
);
