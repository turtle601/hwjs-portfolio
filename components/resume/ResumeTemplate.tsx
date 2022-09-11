import React from 'react';
import styled from 'styled-components';

import { ReactProps } from '@/types/common.types';

const ResumeTemplateContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  margin-top: 5rem;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  height: auto;
`;

const ResumeTemplate: React.FC<ReactProps> = ({ children }) => {
  return (
    <ResumeTemplateContainer>
      <Wrapper>
        {children}
      </Wrapper>
    </ResumeTemplateContainer>
  );
};

export default ResumeTemplate;
