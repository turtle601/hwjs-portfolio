import { useQuery } from 'react-query';

import { fetchNotionDB } from '@/axios/api';
import { ProjectAPI, ProjectResult } from '@/types/axios.types';

export const useProjectQuery = (initialState: ProjectAPI<ProjectResult>) => {
  const {
    isLoading, isError, data, error, isSuccess,
  } = useQuery(['project'], fetchNotionDB, { initialData: initialState });

  return {
   isLoading, isError, data, error, isSuccess,
  };
};
