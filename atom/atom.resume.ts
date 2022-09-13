import { atom } from 'recoil';
import { v1 } from 'uuid';

import { EduType, PjType, SharedType } from '@/types/atom.types';

export const eduState = atom<EduType []>({
  key: `eduState${v1()}`,
  default: [
    {
      id: `부경대학교${v1()}`,
      type: '대학교',
      title: '부경대학교',
      explains: [
        '2016 - 2022 컴퓨터공학과 4학년 재학 중',
        '학점 3.65 / 4.5',
      ],
    },
    {
      id: `네이버${v1()}`,
      type: '교육',
      title: '네이버 부스트 캠프 챌린지 6기',
      explains: [
        '네이버 부스트 캠프 챌린지 2021/07/19 ~ 2021/08/20 진행',
        '멤버쉽 과정 불합격',
      ],
    },
    {
      id: `프로그래머스${v1()}`,
      type: '교육',
      title: '프로그래머스 프론트엔드 자바스크립트 온라인 스터디 12기',
      explains: [
        '2021/10/13 ~ 2021/11/13 진행',
        'JavaScript로 React, Vue 같은 프레임워크처럼 개발하는 방법에 대해 학습',
      ],
    },
  ],
});

export const shareState = atom<SharedType []>({
  key: `shareState${v1()}`,
  default: [
    {
      id: `블로그${v1()}`,
      title: '벨로그',
      type: '블로그',
      explains: [
        '알고리즘, CS지식 공부 내용, 회고록 등등을 정리',
        '프로젝트 스프린트 후기 및 내용 정리',
      ],
    },
  ],
});

export const pjState = atom<PjType []>({
  key: `projectState${v1()}`,
  default: [
    {
      id: `준승 포트폴리오${v1()}`,
      title: '준승 포트폴리오(현재 페이지)',
      type: '개인 프로젝트',
      period: '2022년 8월 22일 ~ 계속 개발 중',
      explains: [
        '나만의 포트폴리오를 만들기 위해 제작',
        '다크모드 구현',
        'notion api 를 사용하여 프로젝트 정보 렌더링하기',
      ],
      worries: [
        {
          link: 'https://velog.io/@turtle601/%EC%A4%80%EC%8A%B9s-portfolio-1%EC%B0%A8-%EB%B0%B0%ED%8F%AC-%EC%8A%A4%ED%94%84%EB%A6%B0%ED%8A%B8',
          text: "[준승's 포트폴리오] 1차 배포 스프린트 회고",
        },
        {
          link: 'https://velog.io/@turtle601/%EC%A4%80%EC%8A%B9-portfolio-2%EC%B0%A8-%EB%B0%B0%ED%8F%AC-%EC%8A%A4%ED%94%84%EB%A6%B0%ED%8A%B8',
          text: "[준승's 포트폴리오] 2차 배포 스프린트 회고",
        },

      ],
      readme: 'https://github.com/turtle601/hwjs-portfolio',
    },
  ],
});
