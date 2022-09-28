import { useRecoilState } from 'recoil';
import { useEffect, useState } from 'react';
import { themeState } from '@/atom/atom.theme';

export const useDarkMode = (): [string, boolean, () => void] => {
  const [theme, setTheme] = useRecoilState(themeState);
  const [mounted, setMounted] = useState(false);

  const setMode = (mode: string) => {
    window.localStorage.setItem('hwjs', mode);
    setTheme(mode);
  };

  const toggleTheme = () => {
    if (theme === 'light') {
      setMode('dark');
    } else {
      setMode('light');
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('hwjs');

    if (localTheme !== null) {
      setTheme(localTheme);
    }

    setMounted(true);
  }, [setTheme, theme]);

  return [theme, mounted, toggleTheme];
};
