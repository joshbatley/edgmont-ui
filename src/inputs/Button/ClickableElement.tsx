import React from 'react';
import { BaseButton, BaseButtonProps } from './BaseButton';

export type ClickableElementProps = Omit<BaseButtonProps, 'size' | 'color' | 'isLoading'>;

export const ClickableElement: React.FC<ClickableElementProps> = ({ children, ...rest }) => {
  return (
    <BaseButton
      size="none"
      color="gray"
      {...rest}
    >
      {children}
    </BaseButton>
  );
};
