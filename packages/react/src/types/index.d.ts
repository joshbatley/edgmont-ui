
export type OverriderDefaults = Record<Partial<Property>, string>;

export type Position = CardinalPoints | IntercardinalPoints;
export type CardinalPoints = 'N' | 'E' | 'S' | 'W';
export type IntercardinalPoints = 'NW' | 'NE' | 'SE' | 'SW';

export type Direction = 'horizontal' | 'vertical';

export type ObjectKey = string | number | symbol;
export type WithKey<K extends string | number | symbol> = {
  [k in K]: boolean
};

// TS hack, for as prop as its effort to fix
export type AsProp = any;

export type WithChildren = { children?: React.ReactNode };

export * from './Tabs';
export * from './Snackbar';
export * from './Stepper';
