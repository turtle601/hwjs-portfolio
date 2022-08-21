import React from 'react';

import styled from 'styled-components';
import oc from 'open-color';

import Link from 'next/link';
import { sizes, media } from '@/stylesheets/utils';
import { ReactProps } from '@/types/common.types';

import Blind from '@/components/common/Blind';

const FooterContainer = styled.footer`
  width: 100%;
  
  display: flex;
  flex-direction: column;
  position: fixed;
  bottom: 0px;
`;

const WhiteBackground = styled.div`
  background-color: ${oc.gray[4]};
  display: flex;
  justify-content: center;
  height: auto;
`;

const FooterContents = styled.div`
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

const Title = styled.h2`
  white-space: nowrap;
  font-size: 1.2rem;
  font-weight: 600;
  letter-spacing: 2px;
  color: ${oc.gray[9]};
  font-family: 'Rajdhani';  
`;

const Spacer = styled.div`
  flex-grow: 1;
`;

const Description = styled.span`
  padding-left: 2rem;
  white-space: nowrap;
  font-size: 0.75rem;
  letter-spacing: 1px;
  color: ${oc.gray[6]}
`;

const SVGLink = styled.a`
  position: relative;

  & + & {
    margin-left: 1.2rem;
  }
`;

const Footer: React.FC<ReactProps> = () => {
  return (
    <FooterContainer>
      <WhiteBackground>
        <FooterContents>
          <Title>Junseung</Title>
          <Description>@2022 Junseung&apos;s potofolio</Description>

          <Spacer />

          <Link target="_blank" href="mailto:turtle601@naver.com" passHref>
            <SVGLink data-testid="mailLink" href="mailto:turtle601@naver.com">
              <Blind>준승의 메일 보내기 아이콘</Blind>
              <svg fill="#868e96" xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="24px" height="24px">
                <path d="M19,1H5A5.006,5.006,0,0,0,0,6V18a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V6A5.006,5.006,0,0,0,19,1ZM5,3H19a3,3,0,0,1,2.78,1.887l-7.658,7.659a3.007,3.007,0,0,1-4.244,0L2.22,4.887A3,3,0,0,1,5,3ZM19,21H5a3,3,0,0,1-3-3V7.5L8.464,13.96a5.007,5.007,0,0,0,7.072,0L22,7.5V18A3,3,0,0,1,19,21Z" />
              </svg>
            </SVGLink>
          </Link>

          <Link target="_blank" href="https://github.com/turtle601" passHref>
            <SVGLink data-testid="githubLink" href="https://github.com/turtle601">
              <Blind>준승의 github 페이지 링크 아이콘</Blind>
              <svg fill="#868e96" width="24px" height="24px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z" />
              </svg>
            </SVGLink>
          </Link>

        </FooterContents>
      </WhiteBackground>
    </FooterContainer>
    );
};

export default Footer;
