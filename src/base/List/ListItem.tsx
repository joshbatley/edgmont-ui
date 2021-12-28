import React from 'react';
import { Text } from 'base';

export const ListItem: React.FC<React.ComponentPropsWithRef<'li'>> = ({ children, ...rest }) => (
  <Text as="li" {...rest}>{children}</Text>
);
