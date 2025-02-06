import { MoonIcon, SunIcon } from '@heroicons/react/16/solid';
import { Box } from '../../data';
import { OutlineButton, Switch } from '../../inputs';
import { useEdgmontSettings } from './ThemeProvider';

export const ThemeSwitch: React.FC = () => {
  let { theme, toggleTheme } = useEdgmontSettings();
  return (
    <Box display="flex" alignSelf="center" width="120px" justifyContent="space-between" borderRadius="8" border="border.1" px="3" py="3" bg="background">
      <SunIcon width="16px" />
      <Switch checked={theme === 'Dark'} onChange={toggleTheme} />
      <MoonIcon width="16px" />
    </Box>
  );
};

export const ThemeButton: React.FC = () => {
  let { theme, toggleTheme } = useEdgmontSettings();
  return (
    <OutlineButton onClick={toggleTheme}>
      {theme === 'Dark' && (<SunIcon width="16px" />)}
      {theme === 'Light' && (<MoonIcon width="16px" />)}
    </OutlineButton>
  );
};
