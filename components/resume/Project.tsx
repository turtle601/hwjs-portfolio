import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

import { media, sizes } from '@/stylesheets/utils';
import { ReactProps } from '@/types/common.types';

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding-left: 2rem;
  padding-right: 2rem;

  width: ${sizes.wide};

  @media ${media.tablet} {
    width: 100%;
  }

`;

const ProjectTitle = styled.h2`
  font-size: 5rem;

  &::after {
    content: '.';
    color: ${oc.teal[6]}
  }
`;

const ProjectLine = styled.div`
  width: 100%;
  height: 0.5rem;

  margin-top: 2rem;
  background-image: linear-gradient(90deg, ${oc.teal[6]} 20%, ${oc.cyan[6]} 80%);
`;

const Project: React.FC<ReactProps> = ({ children }) => {
  return (
    <ProjectContainer>
      <ProjectTitle>Project</ProjectTitle>
      <ProjectLine />
      {children}
    </ProjectContainer>
  );
};

export default Project;
