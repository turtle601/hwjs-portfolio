import React from 'react';

import styled from 'styled-components';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';

import { ReactProps } from '@/types/common.types';

const StyledLayout = styled.div`
  position: relative;
  min-height: 100vh;
`;

const ContentWrapper = styled.div`
  padding-bottom: 2.5rem;
`;

const Layout: React.FC<ReactProps> = ({ children }) => {
  return (
    <StyledLayout>
      <ContentWrapper>
        <Header />
        {children}
      </ContentWrapper>
      <Footer />
    </StyledLayout>
  );
};

export default Layout;
