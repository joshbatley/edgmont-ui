import classNames from 'classnames';
import React, { forwardRef } from 'react';

export type TableHeadProps = {
  headers?: string[];
  sticky?: boolean;
} & React.ComponentPropsWithRef<'thead'>;

export const TableHead = forwardRef<HTMLTableSectionElement, TableHeadProps>(({ children, headers, className, sticky, ...rest }, ref) => {
  let classes = classNames('text-left bg-gray-50', sticky && 'sticky top-0 shadow', className);
  if (!headers) {
    return (
      <thead ref={ref} className={classes} {...rest}>{children}</thead>
    );
  }
  return (
    <thead ref={ref} className={classes}>
      <tr>
        {headers.map(h => (
          <th key={h} className="px-3 py-3 font-medium uppercase text-xs tracking-wide text-gray-500">{h}</th>
        ))}
      </tr>
    </thead>
  );
});
