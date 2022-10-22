import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import oc from 'open-color';
import { ProjectResult } from '@/types/project.types';
import { shadow } from '@/stylesheets/utils';
import Blind from '@/components/common/Blind';
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

const IconBox = styled.div`
  margin-top: 10px;

  display: flex;
  justify-content: flex-end;

  a + a {
    margin-left: 0.5rem;
  }
`;

const ProjectItem: React.FC<{ project: ProjectResult }> = ({ project }) => {
  const title = project.properties['이름'].title[0].plain_text;
  const description = project.properties.Description.rich_text[0].plain_text;
  const ImgSrc = (project.cover.file.url === undefined)
    ? project.cover.external.url : project.cover.file.url;
  const tags = project.properties['태그'].multi_select;
  const gitrepo = project.properties.Github.url;
  const blogUrl = project.properties.blog.url;
  const deploySite = project.properties['배포'].url;

  return (
    <LinkButton href={deploySite} target>

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

        <IconBox>
          <LinkButton href={blogUrl} variant="link" colorScheme={`${oc.gray[8]}`} target>
            <Blind>준승의 velog 페이지 링크 아이콘</Blind>
            <svg fill="#868e96" xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="16px" height="16px"><path d="M15,24H7.5c-3.033,0-5.5-2.467-5.5-5.5V5.5C2,2.467,4.467,0,7.5,0h5c5.322-.116,8.467,6.442,5.115,10.507,7.023,2.847,5.065,13.44-2.615,13.493ZM5,13v5.5c0,1.378,1.122,2.5,2.5,2.5h7.5c5.276-.139,5.272-7.863,0-8H5Zm0-3h7.5c4.616-.122,4.613-6.879,0-7H7.5c-1.378,0-2.5,1.122-2.5,2.5v4.5Z" /></svg>
          </LinkButton>

          <LinkButton href={gitrepo} variant="link" colorScheme={`${oc.gray[8]}`} target>
            <Blind>준승의 github 페이지 링크 아이콘</Blind>
            <svg fill="#868e96" width="16px" height="16px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z" />
            </svg>
          </LinkButton>
        </IconBox>

      </ProjectItemContainer>
    </LinkButton>
  );
};

export default ProjectItem;
