declare module '*.css' {
  const styles: { [className: string]: string };
  export default styles;
}


type OverriderDefaults = Record<Partial<Property>, string>;
