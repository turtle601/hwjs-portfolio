import React from 'react';

import styled from 'styled-components';
import oc from 'open-color';

import { shadow, media, sizes } from '@/components/stylesheets/utils';
import { ReactProps } from '@/types/common.types';

import Button from '@/components/Button';

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 0px;
  width: 100%;
  ${shadow(1)}
`;

const WhiteBackground = styled.div`
  background-color: white;
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
  color: ${oc.teal[7]};
  font-family: 'Rajdhani';
`;

const Spacer = styled.div`
  flex-grow: 1;
`;

const GradientBorder = styled.div`
  height: 3px;
  background: linear-gradient(to right, ${oc.teal[6]}, ${oc.cyan[5]});
`;

const BtnNavbar = styled.nav`
  a + a {
    margin-left: 1.5rem;
  }

  a + button {
    margin-left: 1.5rem;
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
            <Button href="/" variant="link" colorScheme={oc.cyan[6]}>홈</Button>
            <Button href="/project" variant="link" colorScheme={oc.cyan[6]}>프로젝트</Button>
            <Button href="/connect" variant="link" colorScheme={oc.cyan[6]}>연결하기</Button>
            <Button variant="solid" colorScheme={oc.cyan[6]}>다크모드 버튼</Button>
          </BtnNavbar>
        </HeaderContents>
      </WhiteBackground>
      <GradientBorder />
    </HeaderContainer>
  );
};

export default Header;
