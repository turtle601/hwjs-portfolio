import React from 'react';
import styled from 'styled-components';

import { ReactProps } from '@/types/common.types';

const ResumeTemplateContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 5rem;
`;

const ResumeTemplate: React.FC<ReactProps> = ({ children }) => {
  return (
    <ResumeTemplateContainer>
      {children}
    </ResumeTemplateContainer>
  );
};

export default ResumeTemplate;
