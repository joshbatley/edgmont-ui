import { Box, Typography } from '../../data';

export type LabelProps = {
  value: React.ReactNode;
  children: React.ReactElement;
  error?: boolean;
};

export const Label: React.FC<LabelProps> = ({ value, children, error }) => {
  let isRequired = children.props.required;
  return (
    <Box as="label" display="block">
      <Box color={error ? 'destructive' : 'inherit'} display="flex" fontSize="1" lineHeight="1" mt="4" mb="1">
        {value} {isRequired && <Typography>*</Typography>}
      </Box>
      {children}
    </Box>
  );
};
