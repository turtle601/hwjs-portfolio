import React from 'react';
import {
  fireEvent,
  render, screen,
} from '@testing-library/react';

import '@testing-library/jest-dom';

import { RecoilRoot } from 'recoil';

import oc from 'open-color';
import Home from '@/pages/index';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import { useDarkMode } from '@/hooks/useDarkMode';
import Button from '@/components/common/Button';

describe('<Home />', () => {
  it('matches snapshop', () => {
    const { container } = render(<Home />, { wrapper: RecoilRoot });
    expect(container).toMatchSnapshot();
  });

  it('Header 링크 버튼 Test', () => {
    render(<Header />, { wrapper: RecoilRoot });

    expect(screen.getByTestId('homeBtn')).toHaveAttribute('href', '/');
    expect(screen.getByTestId('projectBtn')).toHaveAttribute('href', '/project');
    expect(screen.getByTestId('connectBtn')).toHaveAttribute('href', '/connect');
  });

  it('Footer 링크 아이콘 버튼 Test', () => {
    render(<Footer />, { wrapper: RecoilRoot });

    expect(screen.getByTestId('mailLink')).toHaveAttribute('href', 'mailto:turtle601@naver.com');
    expect(screen.getByTestId('githubLink')).toHaveAttribute('href', 'https://github.com/turtle601');
  });

  // useDarkMode(커스텀 훅) 테스트
  it('useDarkMode default 상태 테스트', () => {
    let themeState = [] as unknown as ReturnType<typeof useDarkMode>;

    const Wrapper: React.FC = () => {
      themeState = useDarkMode();

      const clickEvent = () => {
        themeState[1]();
      };

      return (
        <Button data-testid="darkMode" variant="solid" colorScheme={oc.gray[5]} onClick={clickEvent}>
          {
            (themeState[0] === 'light') ? 'light' : 'dark'
          }
        </Button>
      );
    };

    render(<Wrapper />, { wrapper: RecoilRoot });
    expect(themeState[0]).toBe('light'); // default 배경 0번 클릭 - theme = light

    const component = screen.getByTestId('darkMode');

    fireEvent.click(component); // 한 번 클릭
    expect(themeState[0]).toBe('dark'); // theme = dark

    fireEvent.click(component); // 두 번 클릭
    expect(themeState[0]).toBe('light'); // theme = light
  });
});
