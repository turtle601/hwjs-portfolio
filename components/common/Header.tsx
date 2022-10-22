import React from 'react';

import styled from 'styled-components';
import oc from 'open-color';

import { ReactProps } from '@/types/common.types';

import LinkButton from '@/components/common/Link';
import { shadow, sizes } from '@/stylesheets/utils';

const HeaderContainer = styled.div`
  position: sticky;
  backdrop-filter: blur(10px);
  top: 0px;
  
  width: 100%;
  height: auto;
  z-index: 10;
  
  ${shadow(1)}
`;

const HeaderResponsive = styled.div`
  width: 100%;

  @media screen and (min-width: ${sizes.wide}){
    width: ${sizes.wide};
  }

  margin: 0 auto;
`;

const HeaderContent = styled.div`
  width: 100%;

  display: flex;
  align-items: center;

  padding: 1rem;

  @media only screen and (max-width: 600px){
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Logo = styled.h1`
  background-color: inherit;
  flex-wrap: nowrap;
  font-size: 1.4rem;
  letter-spacing: 2px;
  color: ${({ theme }) => theme.primary};
  font-family: 'Rajdhani';
`;

const Spacer = styled.div`
  flex-grow: 1;
`;

const BtnNavbar = styled.nav`
  display: flex;
  flex-wrap: nowrap;

  a + a {
    margin-left: 1.2rem;
  }

  a + button {
    margin-left: 1.2rem;
  }

  @media only screen and (max-width: 600px){
    width: 100%;

    flex-direction: column;
    margin-top: 1rem;

    a + a {
      margin-left: 0rem;
      border-top: 1px solid ${oc.gray[5]};
    }

    a + button {
      margin-left: 0rem;
      border-top: 1px solid black;
    }
  }
`;

const HeaderLinkButton = styled(LinkButton)`
  @media only screen and (max-width: 600px){
    width: 100%;
    padding-top: 0.8rem;
    padding-bottom: 0.8rem;
  }
`;

const Header: React.FC<ReactProps> = () => {
  return (
    <HeaderContainer>
      <HeaderResponsive>
        <HeaderContent>
          <Logo>준승 portfolio</Logo>
          <Spacer />
          <BtnNavbar>
            <HeaderLinkButton href="/" variant="link" colorScheme={oc.cyan[6]} target={false}>홈</HeaderLinkButton>
            <HeaderLinkButton href="/project" variant="link" colorScheme={oc.cyan[6]} target={false}>프로젝트</HeaderLinkButton>
            <HeaderLinkButton href="/resume" variant="link" colorScheme={oc.cyan[6]} target={false}>내 소개</HeaderLinkButton>
          </BtnNavbar>
        </HeaderContent>
      </HeaderResponsive>
    </HeaderContainer>

  );
};

export default Header;
