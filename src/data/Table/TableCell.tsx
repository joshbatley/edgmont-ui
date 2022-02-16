import React, { forwardRef } from 'react';
import clsx from 'clsx';

export type TableCellProps = React.ComponentPropsWithRef<'td'>;

export const TableCell = forwardRef<HTMLTableCellElement, TableCellProps>(({ children, className, ...rest }, ref) => (
  <td ref={ref} className={clsx('px-3 py-2.5', className)} {...rest}>
    {children}
  </td>
));
