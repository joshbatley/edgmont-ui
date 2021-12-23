import React, { useState } from 'react';
import { TextField, TextFieldProps } from './TextField';
import { EyeIcon, EyeOffIcon } from 'atoms/Icons/Outline';
import { ClickableElement } from 'inputs/Button';

type Props = TextFieldProps;

const Btn: React.FC<{ showPassword: boolean, onClick: () => void }> = ({ showPassword, onClick, ...args }) => (
  <ClickableElement type="button" onClick={onClick} {...args}>
    {showPassword ? <EyeOffIcon width={16} /> : <EyeIcon width={16} />}
  </ClickableElement>
);

export const Password: React.FC<Props> = ({ ...args }) => {
  const [showPassword, setToggle] = useState(false);
  const onClick = () => setToggle(!showPassword);
  return (
    <TextField
      {...args}
      after={<Btn showPassword={showPassword} onClick={onClick} />}
      type={showPassword ? 'text' : 'password'}
    />
  );
};
