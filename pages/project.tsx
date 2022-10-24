import { useState, useEffect } from 'react';
import type { NextPage, GetStaticProps } from 'next';

import { Helmet, HelmetProvider } from 'react-helmet-async';

import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query';
import { ProjectAPI, ProjectResult } from '@/types/project.types';
import { getNotionApi } from '@/api/getNotionApi';

import ProjectList from '@/components/project/ProjectList';
import Layout from '@/components/common/Layout';

const Project: NextPage = () => {
  const [showChild, setShowChild] = useState(false);
  const project = useQuery<ProjectAPI<ProjectResult>>(['project'], async () => getNotionApi());

    // 클라이언트 측 하이드레이션이 표시될 때까지 대기
    useEffect(() => {
      setShowChild(true);
    }, []);

    if (!showChild) {
      // 처음 자리표시자 UI를 표시할 수 있다.
      return null;
    }

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
