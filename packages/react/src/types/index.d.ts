type OverriderDefaults = Record<Partial<Property>, string>;

type Colors = 'primary' | 'success' | 'info' | 'error' | 'warning' | 'base';

type Size = 'large' | 'medium' | 'small';
type Position = CardinalPoints | IntercardinalPoints;

type CardinalPoints = 'N' | 'E' | 'S' | 'W';
type IntercardinalPoints = 'NW' | 'NE' | 'SE' | 'SW';
type Direction = 'horizontal' | 'vertical';

type Severity = 'error' | 'warning' | 'info' | 'success' | 'none';

type ObjectKey = string | number | symbol;
type WithKey<K extends string | number | symbol> = {
  [k in K]: boolean
};

// TS hack, for as prop as its effort to fix
type AsProp = any;

type WithChildren = { children?: React.ReactNode };
