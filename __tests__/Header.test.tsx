import React from 'react';
import oc from 'open-color';
import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import Header from '@/components/common/Header';
import Button from '@/components/common/Button';

describe('<Header />', () => {
  it('로고 텍스트 확인하기', () => {
    render(<Header />);
    const header = screen.getByText('준승 potofolio');
    expect(header).toBeInTheDocument();
  });

  it('링크 버튼 확인하기', () => {
    render(
      <div>
        <Button data-testid="homeBtn" href="/" variant="link" colorScheme={oc.cyan[6]}>홈</Button>
        <Button data-testid="projectBtn" href="/project" variant="link" colorScheme={oc.cyan[6]}>프로젝트</Button>
        <Button data-testid="connectBtn" href="/connect" variant="link" colorScheme={oc.cyan[6]}>연결하기</Button>
      </div>,
    );

    expect(screen.getByTestId('homeBtn')).toHaveAttribute('href', '/');
    expect(screen.getByTestId('projectBtn')).toHaveAttribute('href', '/project');
    expect(screen.getByTestId('connectBtn')).toHaveAttribute('href', '/connect');
  });
});
