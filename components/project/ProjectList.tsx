import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useQuery } from '@tanstack/react-query';
import ProjectItem from './ProjectItem';
import { ProjectAPI, ProjectResult } from '@/types/project.types';
import { getNotionApi } from '@/api/getNotionApi';

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
  const [state, setState]
    = useState<ReturnType<typeof useQuery<ProjectAPI<ProjectResult>>> | null>(null);
  const fetchData = useQuery<ProjectAPI<ProjectResult>>(['project'], async () => getNotionApi());

  useEffect(() => {
    setState(fetchData);
  }, [fetchData]);

  if (state === null) {
    return <div>서버가 이상해요...</div>;
  }

  const { data } = state;

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
