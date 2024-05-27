import { Box } from '../../data';

export type ItemProps = {
  item: any;
  isLastItem?: boolean;
  dividerIcon: React.ReactElement;
};

export const Item: React.FC<ItemProps> = ({
  item, isLastItem = false, dividerIcon,
}) => {
  return (
    <Box display="inline-flex" alignItems="center" color={isLastItem ? 'inherit' : 'mutedForeground'}>
      {item}
      {!isLastItem && <Box mx="2" display="inline-block">{dividerIcon}</Box>}
    </Box>
  );
};
