import { Typography } from '../../data/Typography';

export const ListItem: React.FC<React.ComponentPropsWithRef<'li'>> = ({ children, ...rest }) => (
  <Typography as="li" {...rest}>{children}</Typography>
);
