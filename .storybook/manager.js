import { create } from '@storybook/theming';
import { addons } from '@storybook/addons';
import Logo from '../public/storybook-logo.svg';

const theme = create({
  base: 'light',
  brandTitle: 'Edgmont UI',
  brandUrl: 'https://github.com/joshbatley/edgmont-ui',
  brandImage: Logo
});

addons.setConfig({
  theme,
});
