import { useQuery } from 'react-query';

import { fetchNotionDB } from 'axios/api';
import { ProjectAPI, ProjectResult } from '@/types/axios.types';

export const useProjectQuery = (initialData: ProjectAPI<ProjectResult>) => {
  const {
    isLoading, isError, data, error,
  } = useQuery(['project'], fetchNotionDB, { initialData });

  return {
   isLoading, isError, data, error,
  };
};
