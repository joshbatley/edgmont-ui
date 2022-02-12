import React, { forwardRef } from 'react';
import classNames from 'classnames';

export type TableCellProps = React.ComponentPropsWithRef<'td'>;

export const TableCell = forwardRef<HTMLTableCellElement, TableCellProps>(({ children, className, ...rest }, ref) => (
  <td ref={ref} className={classNames('px-3 py-2.5', className)} {...rest}>
    {children}
  </td>
));
