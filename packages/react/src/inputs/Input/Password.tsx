import { useState } from 'react';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import { ClickableElement } from '../Button';
import { Input, InputProps } from './Input';

export type PasswordProps = InputProps;

const Btn: React.FC<{ showPassword: boolean, onClick: () => void }> = ({ showPassword, onClick, ...rest }) => (
  <ClickableElement px="3" py="2" type="button" onClick={onClick} {...rest}>
    {showPassword ? <EyeSlashIcon width={16} /> : <EyeIcon width={16} />}
  </ClickableElement>
);

export const Password: React.FC<PasswordProps> = ({ ...rest }) => {
  let [showPassword, setToggle] = useState(false);
  let onClick = () => setToggle(!showPassword);
  return (
    <Input
      {...rest}
      after={<Btn showPassword={showPassword} onClick={onClick} />}
      type={showPassword ? 'text' : 'password'}
    />
  );
};
