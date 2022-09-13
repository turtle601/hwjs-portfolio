import React from 'react';
import styled from 'styled-components';

import { useRecoilValue } from 'recoil';
import { pjState } from '@/atom/atom.resume';
import { PjType } from '@/types/atom.types';

import * as ResumeStyle from '@/stylesheets/resume';

import LinkButton from '../common/Link';
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
`;

const ProjectWorryTitle = styled.h4`
  ${ResumeStyle.WorryTitle}
`;

const ProjectReadmeTitle = styled.h4`
  ${ResumeStyle.ReadmeTitle}
`;

const ProjectLinkStyleTag = styled.div`
  margin-top: 1.2rem;

  & + & {
    margin-top: 1.2rem;
  }
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
                  return ((worry.link === null)
                    ? <ProjectExplain key={worry.text}>{worry.text}</ProjectExplain>
                    : (
                      <ProjectLinkStyleTag>
                        <LinkButton key={worry.text} variant="underline" href={worry.link} target>
                          <ProjectExplain>
                            {worry.text}
                          </ProjectExplain>
                        </LinkButton>
                      </ProjectLinkStyleTag>
                    ));
                })
              }
              <ProjectReadmeTitle>리드미</ProjectReadmeTitle>
              <ProjectLinkStyleTag>
                <LinkButton variant="underline" href={project.readme} target>
                  <ProjectExplain>{project.readme}</ProjectExplain>
                </LinkButton>
              </ProjectLinkStyleTag>
            </li>
          );
        })
      }
      </ProjectContent>
    </ProjectContainer>
  );
};

export default Project;
