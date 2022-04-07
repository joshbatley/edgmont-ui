import React, { forwardRef } from 'react';
import clsx from 'clsx';

export type TableRowProps = {
  active?: boolean;
  onClick?: (event: React.MouseEvent) => void;
} & React.ComponentPropsWithRef<'tr'>;

export const TableRow = forwardRef<HTMLTableRowElement, TableRowProps>(({ active, children, className, onClick, ...rest }, ref) => (
  <tr
    ref={ref}
    onClick={onClick}
    style={{ boxShadow: 'var(--tw-shadow-color) 3px 0px 0px 0px inset' }}
    className={clsx(
      { 'hover:bg-gray-50 hover:shadow-gray-500 cursor-pointer': typeof onClick === 'function' },
      { 'bg-primary-50 shadow-primary-500': active },
      className,
    )}
    {...rest}
  >{children}</tr>
));
