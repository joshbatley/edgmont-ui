import React, { forwardRef } from 'react';
import clsx from 'clsx';

export type TableHeadProps = {
  headers?: string[];
  sticky?: boolean;
} & React.ComponentPropsWithRef<'thead'>;

export const TableHead = forwardRef<HTMLTableSectionElement, TableHeadProps>(({ children, headers, className, sticky, ...rest }, ref) => {
  let classes = clsx('text-left bg-gray-50', { 'sticky top-0 shadow': sticky }, className);
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
