import React from 'react';

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '@/components/Header';

describe('<Header />', () => {
  it('로고 텍스트 확인하기', () => {
    render(<Header />);
    const header = screen.getByText('준승 potofolio');
    expect(header).toBeInTheDocument();
  });
});
