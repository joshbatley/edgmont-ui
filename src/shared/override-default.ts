import classNames from 'classnames';

type Property = 'padding' | 'margin' | 'width' | 'height';

const CssKeys: Record<Property, RegExp> = {
  padding: /^(p[xyltrb]*-)/g,
  margin: /^(m[xyltrb]*-)/g,
  width: /^(w-)/g,
  height: /^(h-)/g,
};

function anyArrayValueMatchRgx(rgx: RegExp, arr: string[]): boolean {
  return arr.some(x => x.match(rgx));
}

export function overriderDefault(defaults: OverriderDefaults, overrider = ''): string {
  let overriderArr = overrider.split(' ');
  let Props = Object.keys(defaults).map((v) => ({
    [defaults[v as Property]]: !anyArrayValueMatchRgx(CssKeys[v as Property], overriderArr),
  }));

  return classNames(Props, overrider);
}
