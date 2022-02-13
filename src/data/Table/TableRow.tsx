import React, { forwardRef } from 'react';
import classNames from 'classnames';

export type TableRowProps = {
  active?: boolean;
  onClick?: (event: React.MouseEvent) => void;
} & React.ComponentPropsWithRef<'tr'>;

export const TableRow = forwardRef<HTMLTableRowElement, TableRowProps>(({ active, children, className, onClick, ...rest }, ref) => (
  <tr
    ref={ref}
    onClick={onClick}
    style={{ boxShadow: 'var(--tw-shadow-color) 3px 0px 0px 0px inset' }}
    className={classNames(
      typeof onClick === 'function' && 'hover:bg-gray-50 hover:shadow-gray-500 cursor-pointer',
      active && 'bg-indigo-50 shadow-indigo-500',
      className,
    )}
    {...rest}
  >{children}</tr>
));
