import React from 'react';
import { Box, Text } from 'data';

export type LabelProps = {
  value: React.ReactNode;
  children: React.ReactElement;
};

export const Label: React.FC<LabelProps> = ({ value, children }) => {
  let isRequired = children.props.required;
  return (
    <Box as="label" display="block">
      <Box display="flex" fontSize={1} lineHeight={1} mt="2" mb={1} ml={1}>
        {value} {isRequired && <Text color="error">*</Text>}
      </Box>
      {children}
    </Box>
  );
};
