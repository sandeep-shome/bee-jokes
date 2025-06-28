export type Lang =
  | 'en'
  | 'hi'
  | 'es'
  | 'fr'
  | 'de'
  | 'it'
  | 'pt'
  | 'ru'
  | 'ja'
  | 'ko'
  | 'bn'
  | 'ur'
  | 'zh'
  | 'ar'
  | 'ta'
  | 'te'
  | 'gu'
  | 'ml'
  | 'pa'
  | 'mr';

export type Category =
  | 'programming'
  | 'general'
  | 'dadjokes'
  | 'puns'
  | 'science'
  | 'officelife'
  | 'animals'
  | 'relationships'
  | 'school';

export interface IJoke {
  id: string;
  joke: string;
  category: Category;
  langCode: Lang;
  tags: string[];
}

export type GetJokeByIdProp = string;

export interface IGetJokesProps {
  category?: Category;
  lang?: Lang;
}

export interface IGetManyJokesProps {
  category?: Category;
  lang?: Lang;
  range?: number;
}

export interface IGetSafeJokesProps {
  category?: Category;
  lang?: Lang;
  range?: number;
}

export interface ILanguage {
  code: string;
  language: Lang;
}

export interface ICategory {
  name: Category;
  description: string;
}
