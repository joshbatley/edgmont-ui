import { TextComp } from '../../data/Text';

export const ListItem: React.FC<React.ComponentPropsWithRef<'li'>> = ({ children, ...rest }) => (
  <TextComp as="li" {...rest}>{children}</TextComp>
);
