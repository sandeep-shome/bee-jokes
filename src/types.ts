export interface IJoke {
  id: string;
  joke: string;
  category: string;
  langCode: string;
  tags: string[];
}

export type GetJokeByIdProp = string;

export interface IGetJokesProps {
  category?: string;
  lang?: string;
}

export interface IGetManyJokesProps {
  category?: string;
  lang?: string;
  range?: number;
}

export interface IGetSafeJokesProps {
  category?: string;
  lang?: string;
  range?: number;
}

export interface ILanguage {
  code: string;
  language: string;
}

export interface ICategory {
  name: string;
  description: string;
}
