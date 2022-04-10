declare module '*.css' {
  const styles: { [className: string]: string };
  export default styles;
}

type OverriderDefaults = Record<Partial<Property>, string>;

type Colors = 'primary' | 'gray' | 'green' | 'lime' | 'red' | 'yellow' | 'blue' | 'purple' | 'orange' | 'pink';

type ColorsAndWhite = Colors | 'white';

type ColorWeights = '50' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900' | 'light' | 'medium' | 'dark';

type ColorPrefix = 'text' | 'bg' | 'border' | 'ring' | 'outline' | 'shadow';

type Size = 'large' | 'medium' | 'small' | 'none';
type Position = CardinalPoints | IntercardinalPoints;

type CardinalPoints = 'N' | 'E' | 'S' | 'W';
type IntercardinalPoints = 'NW' | 'NE' | 'SE' | 'SW';
type Direction = 'horizontal' | 'vertical';

type Severity = 'error' | 'warning' | 'info' | 'success';

type ButtonVariant = 'Clickable' | 'Highlight' | 'Outline' | 'Primary' | 'Secondary';

type ObjectKey = string | number | symbol;
type WithKey<K extends string | number | symbol> = {
  [k in K]: boolean
};

// TS hack, for as prop as its effort to fix
type AsProp = any;
