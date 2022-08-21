import React from 'react';
import Lottie from 'lottie-react';
import animations from 'public/animations.json';

const LottieAni: React.FC = () => {
  return <Lottie animationData={animations} loop />;
};

export default LottieAni;
