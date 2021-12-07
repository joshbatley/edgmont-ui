import { TextInline } from 'atoms';
import React from 'react';
import { BaseButton, BaseButtonProps } from './BaseButton';

type PrimaryButtonProps = BaseButtonProps;

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({ children, color, ...args }) => {
  let bgcolor = `bg-${color}-600`;
  // let textcolor = `text-${color}-100`;
  let textcolor = 'text-white';
  return (
    <BaseButton {...args} className={bgcolor + ' ' + textcolor} color="white">{children}</BaseButton>
  );
};
