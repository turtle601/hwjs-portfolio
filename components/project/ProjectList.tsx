import React from 'react';
import styled from 'styled-components';
import { useQuery } from '@tanstack/react-query';
import ProjectItem from './ProjectItem';
import { ProjectAPI, ProjectResult } from '@/types/project.types';

import { sizes } from '@/stylesheets/utils';

const ProjectListResponsive = styled.div`
  width: 100%;

  @media only screen and (min-width: ${sizes.wide}) {
    width: ${sizes.wide};
  }

  margin: 2rem auto;
`;

const ProjectGrid = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  
  gap: 12px;

  padding-left: 1rem;
  padding-right: 1rem;

  @media only screen and (min-width: ${sizes.tablet}) and (max-width: ${sizes.desktop}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));

  }

  @media only screen and (max-width: ${sizes.tablet}) {
    display: flex;
    justify-content: center;
  }
`;

type ProjectListProps = {
  pj : ReturnType<typeof useQuery<ProjectAPI<ProjectResult>>>
};

const ProjectList: React.FC<ProjectListProps> = ({ pj }) => {
  const { data } = pj;

  return (
    <ProjectListResponsive>
      <ProjectGrid>
        {
          data?.results.map((project) => (
            <ProjectItem key={project.id} project={project} />
          ))
        }
      </ProjectGrid>
    </ProjectListResponsive>
  );
};

export default ProjectList;
