import { useRecoilState } from 'recoil';

import { themeState } from '@/atom/atom.theme';

export const useDarkMode = (): [string, () => void] => {
  const [theme, setTheme] = useRecoilState(themeState);

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  return [theme, toggleTheme];
};
