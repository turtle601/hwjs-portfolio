import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    primary: string,
    secondary: string,
    bgColor: string;
    textColor: string;
  }
}
