import { Portal } from '../../../utils';
import { WithChildren } from '../../../types';

export const PopperContainer: React.FC<WithChildren> = ({ children }) => (
  <Portal>
    {children}
  </Portal>
);
