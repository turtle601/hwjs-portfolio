import React from 'react';
import styled from 'styled-components';

import oc from 'open-color';

import { media, sizes } from '@/stylesheets/utils';

const EducationContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding-left: 2rem;
  padding-right: 2rem;

  width: ${sizes.wide};

  @media ${media.wide} {
    width: 100%;
  }

  div + div {
    margin-top: 1.2rem;
  }

  h3 + div {
    margin-top: 1.2rem;
  }
`;

const EducationTitle = styled.h2`
  font-size: 5rem;

  &::after {
    content: '.';
    color: ${oc.teal[6]}
  }
`;

const EducationLine = styled.div`
  width: 100%;
  height: 0.5rem;

  margin-top: 2rem;
  background-image: linear-gradient(90deg, ${oc.teal[6]} 20%, ${oc.cyan[6]} 80%);
  margin-bottom: 1.5rem;
`;

const Title = styled.h3`
  margin-top: 1.5rem;
  font-size: 2.5rem;
  font-weight: bold;
`;

const EducationType = styled.div`
  font-size: 1.5rem;
`;

const EducationExplain = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-size: 1.5rem;

  &::before {
    content: url("data:image/svg+xml,%3Csvg width='18px' height='18px' viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='48' height='48' fill='white' fill-opacity='0.01'/%3E%3Cpath d='M43 11L16.875 37L5 25.1818' stroke='teal' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");    
    margin-right: 0.5rem;
    
  }

  line-height: 1.5rem;
`;

const Education: React.FC = () => {
  return (
    <EducationContainer>
      <EducationTitle>Education</EducationTitle>
      <EducationLine />

      <EducationType>대학교</EducationType>
      <Title>부경대학교</Title>
      <EducationExplain>2016 - 2022 컴퓨터공학과 4학년 재학 중</EducationExplain>
      <EducationExplain>학점 3.65 / 4.5</EducationExplain>

      <EducationType>교육</EducationType>
      <Title>네이버 부스트 캠프 챌린지 6기</Title>
      <EducationExplain>네이버 부스트 캠프 챌린지 2021/07/19 ~ 2021/08/20 진행</EducationExplain>
      <EducationExplain>멤버쉽 과정 불합격</EducationExplain>

      <EducationType>교육</EducationType>
      <Title>프로그래머스 프론트엔드 자바스크립트 온라인 스터디 12기</Title>
      <EducationExplain>2021/10/13 ~ 2021/11/13 진행</EducationExplain>
      <EducationExplain>JavaScript로 React, Vue 같은 프레임워크처럼 개발하는 방법에 대해 학습</EducationExplain>

    </EducationContainer>
  );
};

export default Education;
