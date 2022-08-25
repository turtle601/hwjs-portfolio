export type ProjectAPI<T> = {
  object: 'string',
  results: T[],
  next_cursor: object,
  has_more: boolean
  page: object,
};

type IdAndType = {
  [k in ('id' | 'type')] : string;
};

type ProjectNameTitle = {
  type: string;
  text: object;
  annotations: object;
  plain_text: string;
  href: object;
};

type ProjectDescriptionRichtext = ProjectNameTitle;

type ProjectCover = {
  type: string;
  external: {
    url: string;
  }
};

type ProjectTag = {
  [k in ('id' | 'name' | 'color')] : string;
};

type ProjectURL = { [k in ('id' | 'url')] : string; } & { type: 'url' };

type ProjectProperty = {
  '태그': IdAndType & { multi_select : ProjectTag[] };
  '이름': IdAndType & { title : ProjectNameTitle[] }
  '배포': ProjectURL;
  WorkPeriod: IdAndType & { data : object };
  Description: IdAndType & { rich_text: ProjectDescriptionRichtext[] };
  Github: ProjectURL;
  blog: ProjectURL;
};

export type ProjectResult = {
  object: string;
  id: string;
  created_time: string;
  last_edited_time: string;
  created_by: object,
  last_edited_by: object,
  cover: ProjectCover,
  icon: object,
  parent: object,
  archived: boolean,
  properties: ProjectProperty,
  url: string;
};
