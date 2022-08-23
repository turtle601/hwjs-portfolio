import React from 'react';

import { RecoilRoot } from 'recoil';
import type { AppProps } from 'next/app';

import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import Provider from '@/components/common/Provider';

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen />
        <Provider>
          <Component {...pageProps} />
        </Provider>
      </QueryClientProvider>
    </RecoilRoot>
  );
}

export default MyApp;
