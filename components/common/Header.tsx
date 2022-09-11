import React from 'react';

import styled, { css } from 'styled-components';
import oc from 'open-color';

import { shadow, sizes } from '@/stylesheets/utils';
import { ReactProps } from '@/types/common.types';

import LinkButton from '@/components/common/Link';

import DarkModeButton from '@/components/home/DarkModeButton';

const HeaderContainer = styled.div`
  position: sticky;
  backdrop-filter: blur(10px);
  top: 0px;
  
  width: 100%;
  height: auto;
  
  display: flex;
  justify-content: center;
  z-index: 10;
  
  ${shadow(1)}
`;

const HeaderContents = styled.header`
  width: ${sizes.wide};
  height: 55px;
  display: flex;
  flex-direction: row;
  align-items: center;

  padding-left: 1rem;
  padding-right: 1rem;

  @media ${sizes.wide} {
    width: 100%;
  }
`;

const Logo = styled.h1`
  background-color: inherit;
  white-space: nowrap;
  font-size: 1.4rem;
  letter-spacing: 2px;
  color: ${({ theme }) => theme.primary};
  font-family: 'Rajdhani';
`;

const Spacer = styled.div`
  flex-grow: 1;
`;

const GradientBorder = styled.div`
  height: 3px;

  ${({ theme }) => css`
    background: linear-gradient(to right, ${theme.primary}, ${theme.secondary});
  `}
`;

const BtnNavbar = styled.nav`
  a + a {
    margin-left: 1.2rem;
  }

  a + button {
    margin-left: 1.2rem;
  }
`;

const Header: React.FC<ReactProps> = () => {
  return (
    <HeaderContainer>
      <HeaderContents>
        <Logo>준승 potofolio</Logo>
        <Spacer />
        <BtnNavbar>
          <LinkButton data-testid="homeBtn" href="/" variant="link" colorScheme={oc.cyan[6]} target={false}>홈</LinkButton>
          <LinkButton data-testid="projectBtn" href="/project" variant="link" colorScheme={oc.cyan[6]} target={false}>프로젝트</LinkButton>
          <LinkButton data-testid="connectBtn" href="/connect" variant="link" colorScheme={oc.cyan[6]} target={false}>연결하기</LinkButton>
          <DarkModeButton />
        </BtnNavbar>
      </HeaderContents>
      <GradientBorder />
    </HeaderContainer>
  );
};

export default Header;
