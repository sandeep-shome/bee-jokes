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
  | 'school'
  | 'food'
  | 'sports'
  | 'history'
  | 'travel'
  | 'medical'
  | 'tech'
  | 'music'
  | 'financial'
  | 'popculture'
  | 'holiday'
  | 'family'
  | 'sarcasm';

export interface IJoke {
  id: string;
  joke: string;
  category: Category;
  langCode: Lang;
  tags: string[];
}

export type GetJokeByIdParam = string;

export interface IGetJokesParams {
  category?: Category;
  lang?: Lang;
}

export interface IGetManyJokesParams {
  category?: Category;
  lang?: Lang;
  range?: number;
}

export interface IGetSafeJokesParams {
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
