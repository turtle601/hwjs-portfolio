import axios from 'axios';
import { TOKEN, DATABASE_ID } from '@/config/index';

import { ProjectAPI, ProjectResult } from '@/types/axios.types';

const options = {
  method: 'POST',
  url: `https://api.notion.com/v1/databases/${DATABASE_ID as string}/query`,
  headers: {
    Accept: 'application/json',
    'Notion-Version': '2022-02-22',
    'Content-Type': 'application/json',
    Authorization: `Bearer ${TOKEN as string}`,
  },
  data: { page_size: 100 },
};

// notion에서 db 정보 가져오기
export const fetchNotionDB = async () => {
  return axios.request<ProjectAPI<ProjectResult>>(options).then((res) => res.data);
};
