import React from 'react';

import { RecoilRoot } from 'recoil';
import type { AppProps } from 'next/app';

import Provider from '@/components/common/Provider';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Provider>
        <Component {...pageProps} />
      </Provider>
    </RecoilRoot>
  );
}

export default MyApp;
