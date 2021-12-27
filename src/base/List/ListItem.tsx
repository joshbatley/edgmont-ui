import { Text } from 'base';
import React from 'react';

export const ListItem: React.FC<React.ComponentPropsWithRef<'li'>> = ({ children, ...rest }) => (
  <Text as="li" {...rest}>{children}</Text>
);
