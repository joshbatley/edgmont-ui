import { Box, TextComp } from '../../data';

export type LabelProps = {
  value: React.ReactNode;
  children: React.ReactElement;
  error?: boolean;
};

export const Label: React.FC<LabelProps> = ({ value, children, error }) => {
  let isRequired = children.props.required;
  return (
    <Box as="label" display="block">
      <Box color={error ? 'destructive' : 'inherit'} display="flex" fontSize={1} lineHeight={1} mt="2" mb={1} ml={1}>
        {value} {isRequired && <TextComp>*</TextComp>}
      </Box>
      {children}
    </Box>
  );
};
