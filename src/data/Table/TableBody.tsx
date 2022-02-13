import React, { forwardRef } from 'react';
import classNames from 'classnames';

export type TableBodyProps = React.ComponentPropsWithRef<'tbody'>;

export const TableBody = forwardRef<HTMLTableSectionElement, TableBodyProps>(({ children, className, ...rest }, ref) => (
  <tbody ref={ref} className={classNames('divide-y divide-gray-200 bg-white', className)} {...rest}>
    {children}
  </tbody>
));
