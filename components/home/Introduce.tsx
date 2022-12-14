import React from 'react';
import styled, { css } from 'styled-components';
import oc from 'open-color';

import LinkButton from '@/components/common/Link';
import { ReactProps } from '@/types/common.types';

import { fadeInAnimated } from '@/stylesheets/animations';
import { sizes } from '@/stylesheets/utils';

import LottieAni from '@/components/home/LottiAni';
import Blind from '@/components/common/Blind';

const IntroduceResponsive = styled.div`
  width: 100%;

  @media only screen and (min-width: ${sizes.wide}) {
    width: ${sizes.wide};
  }

  margin: 3rem auto;
`;

const IntroduceContent = styled.div`
  display: flex;
  align-items: center;
  padding: 3rem;

  @media only screen and (max-width: ${sizes.wide}) {
    flex-direction: column;
    text-align: center;
    padding: 0rem;
  }
`;

const IntroduceTextBox = styled.div`
  width: 50%;
  padding-left: 1rem;
  padding-right: 1rem;

  display: flex;
  flex-direction: column;

  h2 + p {
    margin-top: 1.5rem;
  }

  @media only screen and (max-width: ${sizes.wide}) {
    width: 100%;
  }
`;

const IntroduceTitle = styled.h2`
  ${fadeInAnimated}
  
  font-size: 3rem;
  line-height: 5rem;
  
  @media only screen and (min-width: ${sizes.tablet}) and (max-width: ${sizes.desktop}) {
    font-size: 2rem;
    line-height: 4rem;
  }

  @media only screen and (max-width: ${sizes.tablet}) {
    font-size: 1.5rem;
    line-height: 3rem;
  }
`;

const IntroduceName = styled.strong<{ delay : number }>`
  font-size: 5rem;
  text-decoration: underline;
  text-decoration-color: ${oc.teal[6]};

  ${fadeInAnimated}

  ${(props) => {
    return css`
      animation-delay: ${props.delay}s;
    `;
  }}

  @media only screen and (min-width: ${sizes.tablet}) and (max-width: ${sizes.desktop}) {
    font-size: 4rem;

  }

  @media only screen and (max-width: ${sizes.tablet}) {
    font-size: 3rem;
  }
`;

const IntroduceDescription = styled.p<{ delay: number }>`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.textColor};
  line-height: 2rem;
  
  ${fadeInAnimated}

  ${(props) => {
    return css`
      animation-delay: ${props.delay}s;
    `;
  }}

`;

const InroduceImgBox = styled.div`
  position: relative;
  width: 50%;
`;

const LinkButtonBox = styled.div`
  width: 100%;

  margin-top: 1rem;

  display: flex;
  flex-direction: column;

  a + a {
    margin-top: 1rem;
  }

  @media only screen and (max-width: ${sizes.wide}) {
    align-items: center;
  }
`;

const Introduce: React.FC<ReactProps> = () => {
  return (
    <IntroduceResponsive>
      <IntroduceContent>
        <IntroduceTextBox>
          <IntroduceTitle>
            ????????? ????????? ????????????
          </IntroduceTitle>
          <IntroduceTitle>
            <IntroduceName delay={0.5}>?????????</IntroduceName> ?????????.
          </IntroduceTitle>
          <IntroduceDescription delay={1}>??????????????? ???????????? ????????? ????????????.</IntroduceDescription>
          <IntroduceDescription delay={1.5}>?????? ?????? ???????????? ???????????? ?????? ???????????????.</IntroduceDescription>
          <IntroduceDescription delay={2}>
            ?????? ???????????? ???????????? ?????? ???????????? ??????????????? ???????????????.
          </IntroduceDescription>
          <LinkButtonBox>
            <LinkButton href="/project" variant="solid" colorScheme={oc.cyan[6]} target={false}>???????????? ????????????</LinkButton>
            <LinkButton href="/resume" variant="solid" colorScheme={oc.cyan[6]} target={false}>?????? ????????? ????????????</LinkButton>
          </LinkButtonBox>
        </IntroduceTextBox>
        <InroduceImgBox>
          <Blind>???????????? ??????????????? ?????????</Blind>
          <LottieAni />
        </InroduceImgBox>
      </IntroduceContent>
    </IntroduceResponsive>
  );
};

export default Introduce;
