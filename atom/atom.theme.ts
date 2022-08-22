import { atom, selector } from 'recoil';
import { v1 } from 'uuid';
import { lightTheme, darkTheme } from '@/stylesheets/theme';

export const themeState = atom({
  key: `themeState${v1()}`,
  default: 'light',
});

export const themeSelector = selector({
  key: `themeSelector${v1()}`,
  get: ({ get }) => {
    const theme = get(themeState);
    return theme === 'light' ? lightTheme : darkTheme;
  },
});
