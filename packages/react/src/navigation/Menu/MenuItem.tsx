import { Button } from '../../inputs/Button';
import { WithChildren } from '../../types';

export type MenuItemProps = {
  onClick?: () => void;
} & WithChildren;

export const MenuItem: React.FC<MenuItemProps> = ({ children, onClick }) => (
  <Button
    mx="1"
    my="0"
    borderRadius="3"
    fontWeight="400"
    onClick={onClick}
  >{children}</Button>
);
