import React from 'react';

import styled, { css } from 'styled-components';
import oc from 'open-color';

import { shadow, sizes, media } from '@/stylesheets/utils';
import { ReactProps } from '@/types/common.types';

import Button from '@/components/common/Button';
import DarkModeButton from '@/components/home/DarkModeButton';

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 0px;
  width: 100%;
  ${shadow(1)}
`;

const WhiteBackground = styled.div`
  display: flex;
  justify-content: center;
  height: auto;
`;

const HeaderContents = styled.header`
  width: ${sizes.wide};
  height: 55px;
  display: flex;
  flex-direction: row;
  align-items: center;

  padding-left: 1rem;
  padding-right: 1rem;
 
  @media ${media.wide} {
    width: 100%;
  }
`;

const Logo = styled.h1`
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
      <WhiteBackground>
        <HeaderContents>
          <Logo>준승 potofolio</Logo>
          <Spacer />
          <BtnNavbar>
            <Button data-testid="homeBtn" href="/" variant="link" colorScheme={oc.cyan[6]}>홈</Button>
            <Button data-testid="projectBtn" href="/project" variant="link" colorScheme={oc.cyan[6]}>프로젝트</Button>
            <Button data-testid="connectBtn" href="/connect" variant="link" colorScheme={oc.cyan[6]}>연결하기</Button>
            <DarkModeButton />
          </BtnNavbar>
        </HeaderContents>
      </WhiteBackground>
      <GradientBorder />
    </HeaderContainer>
  );
};

export default Header;
