import { css, keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0 }
  to { opacity: 1 }
`;

export const fadeInAnimated = css`
  opacity: 0;
  animation: ${fadeIn} 1s both; 
`;
