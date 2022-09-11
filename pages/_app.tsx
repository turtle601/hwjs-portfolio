/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';

import { RecoilRoot } from 'recoil';
import type { AppProps } from 'next/app';

import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Provider from '@/components/common/Provider';
// import Layout from '@/components/common/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        retry: 0,
      },
    },
  }));

  return (
    <RecoilRoot>
      <Provider>
        <QueryClientProvider client={queryClient}>
          <Hydrate state={pageProps.dehydratedState}>
            <Component {...pageProps} />
            <ReactQueryDevtools initialIsOpen />
          </Hydrate>
        </QueryClientProvider>
      </Provider>
    </RecoilRoot>
  );
}

export default MyApp;
