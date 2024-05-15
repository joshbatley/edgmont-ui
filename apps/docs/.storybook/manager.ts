import { create } from '@storybook/theming/create';
import { addons } from '@storybook/manager-api';
import Logo from '../public/storybook-logo.svg';

const lightTheme = create({
  base: 'light',
  brandTitle: 'Edgmont UI',
  brandUrl: 'https://github.com/joshbatley/edgmont-ui',
  brandImage: Logo
});

addons.setConfig({
  theme: lightTheme
});
