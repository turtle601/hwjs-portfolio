import React from 'react';

import styled from 'styled-components';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';

import { ReactProps } from '@/types/common.types';

const StyledLayout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Layout: React.FC<ReactProps> = () => {
  return (
    <StyledLayout>
      <Header />
      <Footer />
    </StyledLayout>
  );
};

export default Layout;
