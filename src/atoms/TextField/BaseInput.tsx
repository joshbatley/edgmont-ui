import classNames from 'classnames';
import React from 'react';

export type BaseInputProps = React.ComponentPropsWithRef<'input'>;

export const BaseInput: React.FC<BaseInputProps> = ({ className, ...args }) => (
  <input className={classNames('w-full outline-none rounded-md text-gray-900', className)} {...args} />
);
