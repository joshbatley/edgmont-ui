import classNames from 'classnames';
import React, { forwardRef } from 'react';

export type BaseInputProps = React.ComponentPropsWithRef<'input'>;

export const BaseInput = forwardRef<HTMLInputElement, BaseInputProps>(({ className, ...rest }, ref) => (
  <input className={classNames('w-full outline-none rounded-md text-gray-900', className)} {...rest} ref={ref} />
));
