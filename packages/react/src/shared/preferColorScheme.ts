import { ProvidedTheme } from '../utils/Theme/Theme';

export const InheritedTheme: ProvidedTheme = window.matchMedia('(prefers-color-scheme: light)').matches ? 'Light' : 'Dark';
