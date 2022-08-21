import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

import { ReactProps } from '@/types/common.types';

import { sizes, media } from '@/stylesheets/utils';

import LottieAni from '@/components/home/LottiAni';

const IntroduceContainer = styled.section`
  width: 100%;
  margin-top: 10rem;

  display: flex;
  flex-direction: column;
`;

const WhiteBackground = styled.div`
  background-color: white;
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
  padding-right: 3rem;

  @media ${media.tablet} {
    width: 100%;
    flex-direction: column;
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
  font-size: 2rem;

  @media ${media.tablet} {
    text-align: center;
  }
`;

const IntroduceDescription = styled.p`
  color: ${oc.gray[6]};
  line-height: 1.5;

  @media ${media.tablet} {
    text-align: center;
  }
`;

const InroduceImgBox = styled.div`
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
            <IntroduceTitle>Before they sold out
              readymade gluten
            </IntroduceTitle>
            <IntroduceDescription>
              Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant
              cold-pressed tacos poke beard tote bag.
              Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric
              truffaut hexagon try-hard chambray.
            </IntroduceDescription>
          </IntroduceTextBox>
          <InroduceImgBox>
            <LottieAni />
          </InroduceImgBox>
        </IntroduceContent>
      </WhiteBackground>
    </IntroduceContainer>
  );
};

export default Introduce;
