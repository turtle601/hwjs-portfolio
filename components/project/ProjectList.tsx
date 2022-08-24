import React from 'react';
import { useProjectQuery } from '@/hooks/useProjectQuery';

const ProjectList: React.FC = () => {
  const { data } = useProjectQuery();
  console.log(data);

  return <div>Pro</div>;
};

export default ProjectList;
