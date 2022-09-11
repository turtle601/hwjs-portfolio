import React from 'react';
import styled from 'styled-components';

import { useRecoilValue } from 'recoil';
import { eduState } from '@/atom/atom.resume';
import { EduType } from '@/types/atom.types';

import * as ResumeStyle from '@/stylesheets/resume';

import ResumeHeader from '@/components/resume/ResumeHeader';

const EducationContainer = styled.div`
  ${ResumeStyle.Container}
`;

const EducationTitle = styled.h3`
  ${ResumeStyle.Title}
`;

const EducationType = styled.div`
  ${ResumeStyle.Type}
`;

const EducationExplain = styled.div`
  ${ResumeStyle.Explain}
`;

const EducationContent = styled.ul`
  li + li {
    margin-top: 4rem;
  }
`;

const Education: React.FC = () => {
  const edus = useRecoilValue<EduType []>(eduState);

  return (
    <EducationContainer>
      <ResumeHeader name="Education" />
      <EducationContent>
        {
          edus.map((edu) => {
            return (
              <li key={edu.id}>
                <EducationType>{edu.type}</EducationType>
                <EducationTitle>{edu.title}</EducationTitle>
                {
                  edu.explains.map((explain) => {
                    return <EducationExplain key={explain}>{explain}</EducationExplain>;
                  })
                }
              </li>
            );
          })
        }
      </EducationContent>
    </EducationContainer>
  );
};

export default Education;
