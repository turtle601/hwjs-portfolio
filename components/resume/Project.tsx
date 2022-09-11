import React from 'react';
import styled from 'styled-components';

import { useRecoilValue } from 'recoil';
import { pjState } from '@/atom/atom.resume';
import { PjType } from '@/types/atom.types';

import * as ResumeStyle from '@/stylesheets/resume';

import ResumeHeader from '@/components/resume/ResumeHeader';

const ProjectContainer = styled.div`
  ${ResumeStyle.Container}
  margin-top: 5rem;
`;

const ProjectTitle = styled.h3`
  ${ResumeStyle.Title}
`;

const ProjectType = styled.div`
  ${ResumeStyle.Type}
`;

const ProjectExplain = styled.div`
  ${ResumeStyle.Explain}
`;

const ProjectContent = styled.ul`
  li + li {
    margin-top: 4rem;
  }

  h4 + div {
    margin-top: 1.2rem;
  }
`;

const ProjectWorryTitle = styled.h4`
  ${ResumeStyle.WorryTitle}
`;

const ProjectReadmeTitle = styled.h4`
  ${ResumeStyle.ReadmeTitle}
`;

const Project: React.FC = () => {
  const projects = useRecoilValue<PjType []>(pjState);

  return (
    <ProjectContainer>
      <ResumeHeader name="Project" />
      <ProjectContent>
        {
        projects.map((project) => {
          return (
            <li key={project.id}>
              <ProjectType>{project.type}</ProjectType>
              <ProjectTitle>{project.title}</ProjectTitle>
              {
                project.explains.map((explain) => {
                  return <ProjectExplain key={explain}>{explain}</ProjectExplain>;
                })
              }
              <ProjectWorryTitle>프로젝트 구현 시 했던 고민들</ProjectWorryTitle>
              {
                project.worries.map((worry) => {
                  return <ProjectExplain key={worry}>{worry}</ProjectExplain>;
                })
              }
              <ProjectReadmeTitle>리드미</ProjectReadmeTitle>
              <ProjectExplain>{project.readme}</ProjectExplain>
            </li>
          );
        })
      }
      </ProjectContent>
    </ProjectContainer>
  );
};

export default Project;
