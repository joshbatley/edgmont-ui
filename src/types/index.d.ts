declare module '*.css' {
  const styles: { [className: string]: string };
  export default styles;
}

type OverriderDefaults = Record<Partial<Property>, string>;

type Colors = 'gray' | 'green' | 'red' | 'yellow' | 'blue' | 'purple' | 'teal' | 'pink';
type ColorsAndShades = Colors | 'white' | 'black';

type ColorWeights = '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900' | 'light' | 'medium' | 'dark';

type ColorPrefix = 'text' | 'bg' | 'border' | 'ring' | 'outline' | 'shadow';

// Button
type Size = 'large' | 'medium' | 'small' | 'none';
type Variant = 'button' | 'submit' | 'reset';

