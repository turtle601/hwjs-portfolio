const options = {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Notion-Version': '2022-02-22',
    'Content-Type': 'application/json',
    Authorization: 'Bearer secret_wQ4adc7icOZv2J1JGK5003wHlOPxWPMJyziJ2TLondc',
  },
  body: JSON.stringify({ page_size: 100 }),
};

export const fetchNotionDB = async () => {
  const res = await fetch('https://api.notion.com/v1/databases/28335213edef4013aa4f14481ac0992b/query', options);
  return res.json();
};
