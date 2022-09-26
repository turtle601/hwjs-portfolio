import React from 'react';
import styled, { css } from 'styled-components';
import oc from 'open-color';

import { ReactProps } from '@/types/common.types';

import { fadeInAnimated } from '@/stylesheets/animations';
import { sizes, media } from '@/stylesheets/utils';

import LottieAni from '@/components/home/LottiAni';
import Blind from '@/components/common/Blind';

const IntroduceContainer = styled.section`
  width: 100%;
  margin-top: 5rem;

  display: flex;
  flex-direction: column;
`;

const WhiteBackground = styled.div`
  display: flex;
  justify-content: center;
  height: auto;
`;

const IntroduceContent = styled.div`
  width: ${sizes.wide};

  display: flex;
  flex-direction: row;
  align-items: center;

  padding-left: 3rem;


  @media ${media.tablet} {
    width: 100%;
    flex-direction: column;
    padding-right: 3rem;
  }
`;

const IntroduceTextBox = styled.div`
  width: 50%;

  display: flex;
  flex-direction: column;

  h2 + p {
    margin-top: 1.5rem;
  }

  @media ${media.tablet} {
    width: 100%;
  }
`;

const IntroduceTitle = styled.h2`
  font-size: 3rem;
  ${fadeInAnimated}

  @media ${media.tablet} {
    text-align: center;
    font-size: 2rem;
  }
  
  line-height: 5rem;
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

  @media ${media.tablet} {
    font-size: 4rem;
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

  @media ${media.tablet} {
    text-align: center;
  }
`;

const InroduceImgBox = styled.div`
  position: relative;
  width: 50%;

  @media ${media.tablet} {
    width: 100%;
  }
`;

const Introduce: React.FC<ReactProps> = () => {
  return (
    <IntroduceContainer>
      <WhiteBackground>
        <IntroduceContent>
          <IntroduceTextBox>
            <IntroduceTitle>
              기록과 공유를 좋아하는
            </IntroduceTitle>
            <IntroduceTitle>
              <IntroduceName delay={0.5}>황준승</IntroduceName> 입니다.
            </IntroduceTitle>
            <IntroduceDescription delay={1}>프론트엔드 개발자를 꿈꾸고 있습니다.</IntroduceDescription>
            <IntroduceDescription delay={1.5}>배운 것을 기록하고 공유하는 것을 좋아합니다.</IntroduceDescription>
            <IntroduceDescription delay={2}>
              다른 사람들이 이해하기 쉽게 기록하고 공유하려고 노력합니다.
            </IntroduceDescription>
          </IntroduceTextBox>
          <InroduceImgBox>
            <Blind>코딩하는 애니메이션 이미지</Blind>
            <LottieAni />
          </InroduceImgBox>
        </IntroduceContent>
      </WhiteBackground>
    </IntroduceContainer>
  );
};

export default Introduce;
