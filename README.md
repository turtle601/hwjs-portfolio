<center>
  <h1>준승's potofolio</h1>
  <img width="70%" alt="스크린샷 2022-09-12 13 03 21" src="https://user-images.githubusercontent.com/78203399/190038990-4b006543-32f7-4457-898b-daee75d1c05d.png">

  <div>
    <br />
    <h3>
      <a href="https://hwjs-portfolio.vercel.app/">
        👉 포트폴리오 보러가기
      </a>
    </h3>
  </div>
</center>

<br />

## ⏰ 구현 기간 
- 2022.08.22 ~ (진행 중)

<br />

## 📌 용도
- 컴퓨터공학과 4학년이 되고 취업하기 위해 내 프로젝트와 간단한 자기소개를 하기 위해 제작되었다. 

- 처음 사용하는 기술 스택인 `Next.js`, `Typescript` + `Recoil` + `React-query`를 사용하고 학습하는데 목적을 두었습니다. 

<br />

## 📌 사용한 기술
<details>
  <summary>Next.js</summary>
  <div markdown='1'>
    SEO에 신경써서 내가 만든 웹페이지를 검색엔진에 노출시키고 싶었습니다.
   Next.js를 통해 SSR로 웹페이지를 구현, SEO를 향상시켰습니다. 
  </div>
</details>
<details>
  <summary>React.js</summary>
  <div markdown='1'>
   컴포넌트 단위 개발을 가능하게 하여 재사용성과 유지보수를 용이하게 하고 JSX 문법을 통해서 직관적으로 템플릿을 구성할 수 있어서 React를 사용하게 되었습니다. 
  </div>
</details>
<details>
  <summary>Typescript</summary>
  <div markdown='1'>
    객체에 들어가는 구조에 대한 타입을 미리 정의함으로써 타입스크립트에서 제공하는 자동완성 기능을 이용하고 개발 시 발생할 수 있는 예상하지 못한 데이터 구조(ex) null | undefined) 에러를 사전에 방지하기 위해 사용하였습니다. 
  </div>
</details>
<details>
  <summary>Styled-Components (CSS in JS)</summary>
  <div markdown='1'>
    별도의 CSS파일 관리를 하지 않아도 되고 
    className을 신경쓰지 않아도 된다는 점을 고려하여 사용하게 되었습니다. 
  </div>
</details>
<details>
  <summary>Recoil</summary>
  <div markdown='1'>
    필요에 따라 계속해서 추가적인 기능을 구현하기 때문에 state관리의 용이성을 위해 전역 상태 라이브러리를 사용하였습니다. 
    <br />
    다른 전역상태 라이브러리에 비해 전역 상태의 설정/정의가 매우 쉽고 get/set 함수로 리액트의 상태를 간단하게 변경할 수 있어서 사용하게 되었습니다. 
  </div>
</details>
<details>
  <summary>React-query</summary>
  <div markdown='1'>
    서버에서 데이터를 가져오면서 개발자가 구현해야할 다양한 기능(로딩, 에러, 캐싱 등)들을 지원해줍니다. 
    <br />
    그리고 클라이언트 전역 상태와 서버의 전역 상태를 분리해서 다룰 수 있다는 점에서 React-query를 사용하게 되었습니다. 
  </div>
</details>
<details>
  <summary>ESLint</summary>
  <div markdown='1'>
    프로젝트 코드의 일관성있는 코드 작성을 위해서 사용하였습니다. Airbnb 코드 컨벤션을 사용하였습니다. 
  </div>
</details>
<details>
  <summary>Github Action(CI/CD)</summary>
  <div markdown='1'>
    자동화 배포를 위해 도입했습니다. Github 플랫폼에서 전부 해결 가능하고 사용 방법이 간단해보여 선택하게 되었습니다. 
  </div>
</details>
<details>
  <summary>Vercel(deploy)</summary>
  <div markdown='1'>
    Vercel은 Next.js를 만든 배포 시스템입니다.
     깃허브 주소와 빌드 환경에 대한 정보만 입력하면 쉽게 배포가 됩니다. 뿐만 아니라 메인 브랜치 혹은 메인이 아닌 브랜치(upstream 환경)에서 커밋 시 <code>preview deployment</code>를 제공하여 배포 시 오류를 체크해줍니다. 
    무엇보다도 무료이기 때문에 Vercel로 배포를 하였습니다. 
  </div>
</details>

<br />

## 📌 기능
- 다크 모드 구현
- Notion API를 통해서 Project 데이터 받아오고 렌더링하기 [Project Page]
- 내 이력서 보여주기 [Resume Page]

<br />

## 🤔 프로젝트 구현 시 했던 고민들
- [1차 배포 회고](https://velog.io/@turtle601/%EC%A4%80%EC%8A%B9s-portfolio-1%EC%B0%A8-%EB%B0%B0%ED%8F%AC-%EC%8A%A4%ED%94%84%EB%A6%B0%ED%8A%B8)

- [2차 배포 회고](https://velog.io/@turtle601/%EC%A4%80%EC%8A%B9-portfolio-2%EC%B0%A8-%EB%B0%B0%ED%8F%AC-%EC%8A%A4%ED%94%84%EB%A6%B0%ED%8A%B8)