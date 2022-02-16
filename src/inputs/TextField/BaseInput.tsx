import React, { forwardRef } from 'react';
import clsx from 'clsx';

export type BaseInputProps = React.ComponentPropsWithRef<'input'>;

export const BaseInput = forwardRef<HTMLInputElement, BaseInputProps>(({ className, ...rest }, ref) => (
  <input className={clsx('w-full outline-none rounded-md text-gray-900', className)} {...rest} ref={ref} />
));
