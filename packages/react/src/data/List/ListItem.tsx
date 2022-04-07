import React from 'react';
import { Text } from 'data';

export const ListItem: React.FC<React.ComponentPropsWithRef<'li'>> = ({ children, ...rest }) => (
  <Text as="li" {...rest}>{children}</Text>
);
