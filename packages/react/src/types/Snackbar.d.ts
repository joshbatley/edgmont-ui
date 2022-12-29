import type { AlertProps } from '../../feedback';

type SnackItem = {
  title: string, id?: string
};

type SnackOptions = {
  id?: string;
  body?: string
  persist?: boolean;
  duration?: number;
  severity?: Severity;
} & Omit<AlertProps, 'title', 'withClose'>;

type Snack = SnackItem & SnackOptions;

type SnackbarProviderProps = {
  max?: number;
  anchor?: IntercardinalPoints;
  autoHideDuration?: number;
  portalLocation?: Element;
} & WithChildren;

type SnackContext = {
  enqueue: (message: string, options?: SnackOptions) => void;
  dequeue: (id: string) => void;
  clearAll: () => void;
};
