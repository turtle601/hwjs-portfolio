import React from 'react';
import { useRecoilValue } from 'recoil';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '@/stylesheets/global';

import { ReactProps } from '@/types/common.types';
import { themeSelector } from '@/atom/atom.theme';

const Provider: React.FC<ReactProps> = ({ children }) => {
  const theme = useRecoilValue(themeSelector);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default Provider;
