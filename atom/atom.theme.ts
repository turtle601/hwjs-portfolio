import { atom, selector } from 'recoil';
import { lightTheme, darkTheme } from '@/stylesheets/theme';

export const themeState = atom({
  key: 'themeState',
  default: 'light',
});

export const themeSelector = selector({
  key: 'themeSelector',
  get: ({ get }) => {
    const theme = get(themeState);
    return theme === 'light' ? lightTheme : darkTheme;
  },
});
