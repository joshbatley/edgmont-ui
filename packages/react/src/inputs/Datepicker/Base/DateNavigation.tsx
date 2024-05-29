import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { OutlineButton } from '../../../inputs/Button';

export type LeftNavigationProps = {
  decreaseYear?: () => void;
  decreaseMonth?: () => void;
};

export const LeftNavigation: React.FC<LeftNavigationProps> = ({ decreaseYear, decreaseMonth }) => (
  <>
    {decreaseYear && (
      <OutlineButton px="5px" py="5px" height="inherit" onClick={decreaseYear}>
        <ChevronLeftIcon width={16} height={16} />
      </OutlineButton>
    )}
    {decreaseMonth && (
      <OutlineButton px="5px" py="5px" height="inherit" onClick={decreaseMonth}>
        <ChevronLeftIcon width={16} height={16} />
      </OutlineButton>
    )}
  </>
);

export type RightNavigationProps = {
  increaseYear?: () => void;
  increaseMonth?: () => void;
};

export const RightNavigation: React.FC<RightNavigationProps> = ({ increaseYear, increaseMonth }) => (
  <>
    {increaseMonth && (
      <OutlineButton px="5px" py="5px" height="inherit" onClick={increaseMonth}>
        <ChevronRightIcon width={16} height={16} />
      </OutlineButton>
    )}
    {increaseYear && (
      <OutlineButton px="5px" py="5px" height="inherit" onClick={increaseYear}>
        <ChevronRightIcon width={16} height={16} />
      </OutlineButton>
    )}
  </>
);
