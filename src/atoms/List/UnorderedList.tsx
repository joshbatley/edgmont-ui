import React from 'react';

export const UnorderedList: React.FC = ({ children, ...args }) => (
  <ul className="list-disc list-inside marker:text-gray-500" {...args}>
    {children}
  </ul>
);
