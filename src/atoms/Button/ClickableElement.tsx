import React from 'react';
import { BaseButton, BaseButtonProps } from './BaseButton';

type ClickableElementProps = Omit<BaseButtonProps, 'size' | 'color' | 'isLoading'>;

export const ClickableElement: React.FC<ClickableElementProps> = ({ children, ...args }) => {
  return (
    <BaseButton
      size="none"
      color="gray"
      {...args}
    >
      {children}
    </BaseButton>
  );
};
