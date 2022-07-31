import React from 'react';

export const DateContainer: React.FC<WithChildren> = ({ children }) => (
  <div className="flex text-sm bg-white shadow rounded">
    {children}
  </div>
);
