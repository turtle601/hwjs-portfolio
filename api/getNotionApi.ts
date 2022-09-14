import { TOKEN, DATABASE_ID } from '@/config/index';

const NOTION_URL = `https://api.notion.com/v1/databases/${DATABASE_ID as string}/query`;

const options = {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Notion-Version': '2022-02-22',
    'Content-Type': 'application/json',
    Authorization: `Bearer ${TOKEN as string}`,
  },
  body: JSON.stringify({ page_size: 100 }),
};

export const getNotionApi = async () => {
  const res = await fetch(NOTION_URL, options);
  return res.json();
};
