import type { NextPage } from 'next';

import Layout from '@/components/common/layout';
import Introduce from '@/components/home/Introduce';

const Home: NextPage = () => {
  return <Layout><Introduce /></Layout>;
};

export default Home;
