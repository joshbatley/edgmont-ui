import React from 'react';

export const AccordionDetail: React.FC<WithChildren> = ({ children, ...rest }) => (
  <div className="bg-white px-3 py-2 border-x border-b shadow-inner group-last-of-type:rounded-b-md" {...rest}>{children}</div>
);
