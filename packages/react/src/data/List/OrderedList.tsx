import React from 'react';

export const OrderedList: React.FC<WithChildren> = ({ children, ...rest }) => (
  <ol className="list-decimal list-inside marker:text-gray-500" {...rest}>
    {children}
  </ol>
);
