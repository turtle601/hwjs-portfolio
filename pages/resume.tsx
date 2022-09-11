import { NextPage } from 'next';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import ResumeTemplate from '@/components/resume/ResumeTemplate';
import Project from '@/components/resume/Project';
import Education from '@/components/resume/Eduction';
import Share from '@/components/resume/Share';
import Layout from '@/components/common/Layout';

const Resume: NextPage = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <meta lang="ko" />
          <meta charSet="utf-8" />
          <meta name="description" content="이 문서는 준승의 이력서 페이지입니다." />
          <meta name="author" content="황준승" />
          <title>준승&apos;s potofolio</title>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Rajdhani:700" />
        </Helmet>
      </HelmetProvider>
      <Layout>
        <ResumeTemplate>
          <Education />
          <Project />
          <Share />
        </ResumeTemplate>
      </Layout>
    </>
  );
};

export default Resume;
