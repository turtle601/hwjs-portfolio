import React from 'react';
import styled from 'styled-components';
import { ReactProps } from '@/types/common.types';

const SrOnly = styled.div`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
`;

const Blind: React.FC<ReactProps> = ({ children }) => {
  return <SrOnly>{children}</SrOnly>;
};

export default Blind;
