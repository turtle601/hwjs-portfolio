import React from 'react';

import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';

import { ReactProps } from '@/types/common.types';

const Layout: React.FC<ReactProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
);
};

export default Layout;
