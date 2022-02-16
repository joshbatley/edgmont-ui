import React, { forwardRef } from 'react';
import clsx from 'clsx';

export const TextArea = forwardRef<HTMLTextAreaElement, React.ComponentPropsWithoutRef<'textarea'>>(({ className, ...rest }, ref) => (
  <textarea className={clsx('shadow-sm mt-1 p-2 block h-24 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:z-10', className)} ref={ref} {...rest} />
));
