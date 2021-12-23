import React from 'react';

export const OrderedList: React.FC = ({ children, ...args }) => (
  <ol className="list-decimal list-inside marker:text-gray-500" {...args}>
    {children}
  </ol>
);
