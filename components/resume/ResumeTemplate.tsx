import React, { useRef } from 'react';
import styled from 'styled-components';

import Project from '@/components/resume/Project';
import Education from '@/components/resume/Eduction';
import Share from '@/components/resume/Share';
import FadeInSection from '../common/FadeInSection';

const ResumeTemplateContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 5rem;
  padding-bottom: 5rem;
`;

const ResumeTemplate: React.FC = () => {
  const { current } = useRef(['edu', 'pj', 'share']);

  return (
    <ResumeTemplateContainer>
      {
        current.map((template) => {
          return (
            <FadeInSection>
              {
                template === 'edu' && <Education />
              }
              {
                template === 'pj' && <Project />
              }
              {
                template === 'share' && <Share />
              }
            </FadeInSection>
          );
        })
      }
    </ResumeTemplateContainer>
  );
};

export default ResumeTemplate;
