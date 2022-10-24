import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import oc from 'open-color';
import { ProjectResult } from '@/types/project.types';
import { shadow } from '@/stylesheets/utils';
import LinkButton from '@/components/common/Link';

const ProjectItemContainer = styled.li`
  width: 100%;

  display: flex;
  flex-direction: column;
  border: none;

  color: ${oc.gray[8]};
  
  padding : 1rem;
  
  background-color: ${oc.gray[5]};
  border-radius: 0.5rem;  

  height: 240px;
  
  ${shadow(2)};

  transition: transform .3s, border .3s;

  &:hover {
    transform: scale(1.2);
  }
`;

const StyledImage = styled(Image)`
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
`;

const Tags = styled.ul`
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  gap: 0.2rem;
`;

const Tag = styled.li`
  flex: none;
  background: ${oc.teal[7]};
  color: white;
  padding: 0.2rem;
  border-radius: 0.25rem;
  width: max-content;
  ${shadow(0)};
`;

const ProjectTitle = styled.h2`
  margin-top: 10px;
  font-weight: bold;
`;

const ProjectDescription = styled.div`
  margin-top: 10px;
  font-weight: 300;
  text-overflow: ellipsis;
`;

const ProjectItem: React.FC<{ project: ProjectResult }> = ({ project }) => {
  const title = project.properties['이름'].title[0].plain_text;
  const description = project.properties.Description.rich_text[0].plain_text;
  const ImgSrc = (project.cover.file.url === undefined)
    ? project.cover.external.url : project.cover.file.url;
  const tags = project.properties['태그'].multi_select;
  const gitrepo = project.properties.Github.url;

  return (
    <LinkButton href={gitrepo} target>

      <ProjectItemContainer>
        <StyledImage
          src={ImgSrc}
          width="100%"
          height="100%"
          layout="responsive"
          objectFit="cover"
          alt="프로젝트 썸네일"
        />

        <ProjectTitle>제목: {title}</ProjectTitle>
        <ProjectDescription>설명: {description}</ProjectDescription>

        <Tags>
          {
              tags.map((tag) => (
                <Tag key={tag.id}>{tag.name}</Tag>
              ))
            }
        </Tags>
      </ProjectItemContainer>
    </LinkButton>
  );
};

export default ProjectItem;
