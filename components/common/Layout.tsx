import React from 'react';

import styled from 'styled-components';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';

import { ReactProps } from '@/types/common.types';
import DarkModeButton from '../home/DarkModeButton';
import { sizes } from '@/stylesheets/utils';

const StyledLayout = styled.div`
  position: relative;
  min-height: 100vh;
`;

const ContentWrapper = styled.div`
  padding-bottom: 2.5rem;
`;

const DarkModeWrapper = styled.div`
  width: 100%;

  display: flex;
  justify-content: flex-end;

  @media only screen and (min-width: ${sizes.wide}) {
    width: ${sizes.wide};
  }

  margin: 0 auto;
  padding: 1rem;
`;

const Layout: React.FC<ReactProps> = ({ children }) => {
  return (
    <StyledLayout>
      <ContentWrapper>
        <Header />
        <DarkModeWrapper>
          <DarkModeButton />
        </DarkModeWrapper>
        {children}
      </ContentWrapper>
      <Footer />
    </StyledLayout>
  );
};

export default Layout;
