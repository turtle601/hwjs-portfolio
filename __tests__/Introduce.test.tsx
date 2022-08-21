import React from 'react';
import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import Introduce from '@/components/home/Introduce';

describe('<Introduce />', () => {
  it('Introduce Text 확인하기', () => {
    const titleText = 'Before they sold outreadymade gluten';
    const descriptionText = 'Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.';

    render(<Introduce />);

    expect(screen.getByText(titleText)).toBeInTheDocument();
    expect(screen.getByText(descriptionText)).toBeInTheDocument();
  });
});
