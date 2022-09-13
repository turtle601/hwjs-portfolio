export type EduType = {
  id: string;
  type: '대학교' | '교육';
  title: string;
  explains: string[];
};

export type SharedType = {
  id: string;
  type: '블로그';
  title: string;
  explains: string[];
};

export type WorryType = {
  link: string | null;
  text: string;
};

export type PjType = {
  id: string;
  type: '개인 프로젝트' | '팀 프로젝트';
  title: string;
  period: string;
  explains: string[];
  worries: WorryType[];
  readme: string;
};
