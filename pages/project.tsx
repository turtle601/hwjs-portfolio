import type { NextPage, GetStaticProps } from 'next';

import { Helmet, HelmetProvider } from 'react-helmet-async';

import { dehydrate, QueryClient } from '@tanstack/react-query';
import { ProjectAPI, ProjectResult } from '@/types/axios.types';

import Layout from '@/components/common/Layout';
import { fetchNotionDB } from '@/hooks/useProjectQuery';

import ProjectList from '@/components/project/ProjectList';

export type ProjectProps = {
  notionDB : ProjectAPI<ProjectResult>;
};

const Project: NextPage<ProjectProps> = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <meta lang="ko" />
          <meta charSet="utf-8" />
          <meta name="description" content="이 문서는 준승의 프로젝트 소개 페이지입니다." />
          <meta name="author" content="황준승" />
          <title>준승&apos;s potofolio</title>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Rajdhani:700" />
        </Helmet>
      </HelmetProvider>
      <Layout>
        <ProjectList />
      </Layout>;
    </>
  );
};

export default Project;

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery<ProjectAPI<ProjectResult>>(['project'], async () => fetchNotionDB());

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
