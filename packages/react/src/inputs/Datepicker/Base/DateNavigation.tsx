import {
  ChevronLeftIcon, ChevronRightIcon,
  ChevronDoubleLeftIcon, ChevronDoubleRightIcon,
} from '@heroicons/react/24/outline';
import { Button } from '../../../inputs/Button';

export type LeftNavigationProps = {
  decreaseYear?: () => void;
  decreaseMonth?: () => void;
};

export const LeftNavigation: React.FC<LeftNavigationProps> = ({ decreaseYear, decreaseMonth }) => (
  <>
    {decreaseYear && (
      <Button size='small' onClick={decreaseYear}>
        <ChevronDoubleLeftIcon width={16} height={16} />
      </Button>
    )}
    {decreaseMonth && (
      <Button size='small' onClick={decreaseMonth}>
        <ChevronLeftIcon width={16} height={16} />
      </Button>
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
      <Button size='small' onClick={increaseMonth}>
        <ChevronRightIcon width={16} height={16} />
      </Button>
    )}
    {increaseYear && (
      <Button size='small' onClick={increaseYear}>
        <ChevronDoubleRightIcon width={16} height={16} />
      </Button>
    )}
  </>
);
