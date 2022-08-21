import React from 'react';
import { render, screen } from '@testing-library/react';

import Home from '@/pages/index';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';

describe('<Home />', () => {
  it('matches snapshop', () => {
    const { container } = render(<Home />);
    expect(container).toMatchSnapshot();
  });

  it('Header 링크 버튼 Test', () => {
    render(<Header />);

    expect(screen.getByTestId('homeBtn')).toHaveAttribute('href', '/');
    expect(screen.getByTestId('projectBtn')).toHaveAttribute('href', '/project');
    expect(screen.getByTestId('connectBtn')).toHaveAttribute('href', '/connect');
  });

  it('Footer 링크 아이콘 버튼 Test', () => {
    render(<Footer />);

    expect(screen.getByTestId('mailLink')).toHaveAttribute('href', 'mailto:turtle601@naver.com');
    expect(screen.getByTestId('githubLink')).toHaveAttribute('href', 'https://github.com/turtle601');
  });
});
