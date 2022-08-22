import oc from 'open-color';
import { DefaultTheme } from 'styled-components';

const theme = {
  primary: oc.teal[6],
  secondary: oc.cyan[6],
};

export const lightTheme: DefaultTheme = {
  ...theme,
  bgColor: 'white',
  textColor: oc.gray[8],
};

export const darkTheme: DefaultTheme = {
  ...theme,
  bgColor: oc.gray[8],
  textColor: 'white',
};
