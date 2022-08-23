import type { NextPage } from 'next';

import { Helmet, HelmetProvider } from 'react-helmet-async';

// import { useQuery } from 'react-query';
// import { fetchNotionDB } from '@/axios/api';
import { ProjectAPI, ProjectResult } from '@/types/axios.types';

import Layout from '@/components/common/Layout';
// import { useProjectQuery } from '@/hooks/useProjectQuery';

export type ProjectProps = {
  notionDB : ProjectAPI<ProjectResult>;
};

const Project: NextPage<ProjectProps> = () => {
  // const { notionDB } = props;
  // const { data } = useProjectQuery(notionDB);

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
      <Layout>hi</Layout>;
    </>
  );
};

// export async function getStaticProps() {
//   const notionDB = await fetchNotionDB();

//   return {
//     props: { notionDB },
//   };
// }

export default Project;
