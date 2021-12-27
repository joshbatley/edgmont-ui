import React, { useState } from 'react';
import { TextField, TextFieldProps } from './TextField';
import { EyeIcon, EyeOffIcon } from 'base/Icons/Outline';
import { ClickableElement } from 'inputs/Button';

type Props = TextFieldProps;

const Btn: React.FC<{ showPassword: boolean, onClick: () => void }> = ({ showPassword, onClick, ...rest }) => (
  <ClickableElement type="button" onClick={onClick} {...rest}>
    {showPassword ? <EyeOffIcon width={16} /> : <EyeIcon width={16} />}
  </ClickableElement>
);

export const Password: React.FC<Props> = ({ ...rest }) => {
  const [showPassword, setToggle] = useState(false);
  const onClick = () => setToggle(!showPassword);
  return (
    <TextField
      {...rest}
      after={<Btn showPassword={showPassword} onClick={onClick} />}
      type={showPassword ? 'text' : 'password'}
    />
  );
};
