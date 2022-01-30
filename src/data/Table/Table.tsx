import React, { forwardRef } from 'react';
import classNames from 'classnames';

export type TableProps = {
  containerClasses?: string;
  footer?: React.ReactNode;
} & React.ComponentPropsWithRef<'table'>;

export const Table = forwardRef<HTMLTableElement, TableProps>(({ children, className, containerClasses, footer, ...rest }, ref) => (
  <div style={{ contain: 'paint' }} className={classNames('rounded-md shadow bg-white', !footer && 'pb-1', containerClasses)}>
    <table ref={ref} className={classNames('w-full relative border-collapse divide-y divider-gray-200', className)} {...rest}>
      {children}
    </table>
    {footer && (
      <div className="px-4 py-2 border-t">
        {footer}
      </div>
    )}
  </div>
));
