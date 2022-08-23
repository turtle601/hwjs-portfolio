export type ProjectAPI<T> = {
  object: 'string',
  results: T[],
  next_cursor: object,
  has_more: boolean
  page: object,
};

type IdAndType = {
  [key in ('id' | 'type')] : 'string'
};

type ProjectNameTitle = {
  type: string;
  text: object;
  annotations: object;
  plain_text: string;
  href: object;
};

type ProjectProperty = {
  '태그': IdAndType & { multi_select : object };
  WorkPeriod: IdAndType & { data : object };
  Description: IdAndType & { rich_text: object };
  '이름': IdAndType & { title : ProjectNameTitle[] }
};

export type ProjectResult = {
  object: string;
  id: string;
  created_time: string;
  last_edited_time: string;
  created_by: object,
  last_edited_by: object,
  cover: object,
  icon: object,
  parent: object,
  archived: boolean,
  properties: ProjectProperty,
  url: string;
};
