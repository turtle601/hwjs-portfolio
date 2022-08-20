import React from 'react';
import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import Footer from '@/components/common/Footer';

describe('<Footer />', () => {
  it('Footer Text 확인하기', () => {
    render(<Footer />);

    expect(screen.getByText('Junseung')).toBeInTheDocument();
    expect(screen.getByText('@2022 Junseung\'s potofolio')).toBeInTheDocument();
  });

  it('Footer svg 링크 확인하기', () => {
    render(<Footer />);

    expect(screen.getByTestId('mailSVGLink')).toHaveAttribute('href', 'mailto:turtle601@naver.com');
    expect(screen.getByTestId('githubSVGLink')).toHaveAttribute('href', 'https://github.com/turtle601');
  });
});
