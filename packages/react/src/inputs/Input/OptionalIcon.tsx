import { Box } from '../../data';

export type OptionalIconProps = {
  icon: React.ReactNode;
  left?: boolean;
  right?: boolean;

};
export const OptionalIcon: React.FC<OptionalIconProps> = ({ icon, left, right }) =>
  icon ? (
    <Box
      bg="rgba(0,0,0,0.02)"
      display="flex"
      borderRight={right ? 'none' : 'border.1'}
      borderLeft={left ? 'none' : 'border.1'}
      alignItems="center"
      px="3"
      py="2"
    >{icon}</Box>) : null;
