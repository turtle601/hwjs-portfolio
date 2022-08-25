import React from 'react';
import styled from 'styled-components';
import { useProjectQuery } from '@/hooks/useProjectQuery';
import ProjectItem from './ProjectItem';

import { media, sizes } from '@/stylesheets/utils';

const ProjectListContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  margin-top: 10rem;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  height: auto;
`;

const ProjectGrid = styled.div`
  width: ${sizes.wide};

  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  
  gap: 2px;

  @media ${media.wide} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media ${media.tablet} {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

const ProjectList: React.FC = () => {
  const { data } = useProjectQuery();

  return (
    <ProjectListContainer>
      <Wrapper>
        <ProjectGrid>
          {
          data?.results.map((project) => (
            <ProjectItem key={project.id} project={project} />
          ))
        }
        </ProjectGrid>
      </Wrapper>
    </ProjectListContainer>
  );
};

export default ProjectList;
