import { themes } from '@storybook/theming';
import LogoLight from '../public/logo-light.svg';
import LogoDark from '../public/logo-dark.svg';

export const lightTheme = {
  ...themes.light,
  base: 'light',
  brandTitle: 'Edgmont UI',
  brandUrl: 'https://github.com/joshbatley/edgmont-ui',
  brandImage: LogoLight,
  appBg: 'hsl(0, 0%, 100%)',
  appContentBg: 'hsl(0, 0%, 100%)',
  barBg: 'hsl(0, 0%, 100%)',
}

export const darkTheme = {
  ...themes.dark,
  base: 'dark',
  brandTitle: 'Edgmont UI',
  brandUrl: 'https://github.com/joshbatley/edgmont-ui',
  brandImage: LogoDark,
  appBg: 'hsl(240, 10%, 3.9%)',
  appContentBg: 'hsl(240, 10%, 3.9%)',
  barBg: 'hsl(240, 10%, 3.9%)',
};
