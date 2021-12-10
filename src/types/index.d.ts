declare module '*.css' {
  const styles: { [className: string]: string };
  export default styles;
}

type OverriderDefaults = Record<Partial<Property>, string>;

type Colors = 'gray' | 'green' | 'red' | 'yellow' | 'blue' | 'purple' | 'teal' | 'pink' | 'white';

// Button
type Size = 'large' | 'medium' | 'small' | 'none';
type Variant = 'button' | 'submit' | 'reset';

