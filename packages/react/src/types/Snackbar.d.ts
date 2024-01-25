import type { AlertProps } from '../feedback';

export type SnackItem = {
  title: string, id?: string
};

export type SnackOptions = {
  id?: string;
  body?: string
  persist?: boolean;
  duration?: number;
  severity?: Severity;
} & Omit<AlertProps, 'title', 'withClose'>;

export type Snack = SnackItem & SnackOptions;

export type SnackbarProviderProps = {
  max?: number;
  anchor?: IntercardinalPoints;
  autoHideDuration?: number;
  portalLocation?: Element;
} & WithChildren;

export type SnackContext = {
  enqueue: (message: string, options?: SnackOptions) => void;
  dequeue: (id: string) => void;
  clearAll: () => void;
};
