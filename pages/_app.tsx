import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import { theme } from '@/stylesheets/theme';
import GlobalStyle from '@/stylesheets/global';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
