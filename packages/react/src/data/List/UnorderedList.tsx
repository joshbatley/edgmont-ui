import React from 'react';

export const UnorderedList: React.FC<WithChildren> = ({ children, ...rest }) => (
  <ul className="list-disc list-inside marker:text-gray-500" {...rest}>
    {children}
  </ul>
);
