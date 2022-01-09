declare module '*.css' {
  const styles: { [className: string]: string };
  export default styles;
}

type OverriderDefaults = Record<Partial<Property>, string>;

type Colors = 'gray' | 'green' | 'red' | 'yellow' | 'blue' | 'purple' | 'teal' | 'pink';
type ColorsAndShades = Colors | 'white' | 'black';

type ColorWeights = '50' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900' | 'light' | 'medium' | 'dark';

type ColorPrefix = 'text' | 'bg' | 'border' | 'ring' | 'outline' | 'shadow';

type Size = 'large' | 'medium' | 'small' | 'none';
type Variant = 'button' | 'submit' | 'reset';
type Position = CardinalPoints | IntercardinalPoints;

type CardinalPoints = 'N' | 'E' | 'S' | 'W';
type IntercardinalPoints = 'NW' | 'NE' | 'SE' | 'SW';
type Direction = 'horizontal' | 'vertical';

type Severity = 'error' | 'warning' | 'info' | 'success';
