import type { NextPage, GetStaticProps } from 'next';

import { Helmet, HelmetProvider } from 'react-helmet-async';

import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query';
import { ProjectAPI, ProjectResult } from '@/types/project.types';
import { getNotionApi } from '@/api/getNotionApi';

import ProjectList from '@/components/project/ProjectList';
import Layout from '@/components/common/Layout';

const Project: NextPage = () => {
  const project = useQuery<ProjectAPI<ProjectResult>>(['project'], async () => getNotionApi());

  if (project.isLoading) return <div>로딩중입니다...</div>;

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <meta lang="ko" />
          <meta charSet="utf-8" />
          <meta name="description" content="이 문서는 준승의 프로젝트 소개 페이지입니다." />
          <meta name="author" content="황준승" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>준승&apos;s potofolio</title>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Rajdhani:700" />
          <link href="https://fonts.googleapis.com/css2?family=Jua&display=swap" rel="stylesheet" />
        </Helmet>
      </HelmetProvider>
      <Layout>
        <ProjectList pj={project} />
      </Layout>
    </>
  );
};

export default Project;

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery<ProjectAPI<ProjectResult>>(['project'], async () => getNotionApi());

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
