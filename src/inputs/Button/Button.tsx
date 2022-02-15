import React from 'react';
import {
  ClickableElement,
  ClickableElementProps,
  HighlightButton,
  HighlightButtonProps,
  OutlineButton,
  OutlineButtonProps,
  PrimaryButton,
  PrimaryButtonProps,
  SecondaryButton,
  SecondaryButtonProps,
} from '.';

type Clickable = { variant: 'Clickable' } & ClickableElementProps;
type Highlight = { variant: 'Highlight' } & HighlightButtonProps;
type Outline = { variant: 'Outline' } & OutlineButtonProps;
type Primary = { variant: 'Primary' } & PrimaryButtonProps;
type Secondary = { variant: 'Secondary' } & SecondaryButtonProps;
export type ButtonProps = Clickable | Highlight | Outline | Primary | Secondary;

const getComp = (variant: ButtonVariant) => {
  switch (variant) {
    case 'Clickable':
      return ClickableElement;
    case 'Highlight':
      return HighlightButton;
    case 'Outline':
      return OutlineButton;
    case 'Primary':
      return PrimaryButton;
    case 'Secondary':
      return SecondaryButton;
  }
};

export const Button: React.FC<ButtonProps> = ({ variant, ...rest }) => {
  let Comp = getComp(variant);
  return (
    <Comp {...rest} />
  );
};
