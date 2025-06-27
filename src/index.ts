import {
  GetJokeByIdProp,
  ICategory,
  IGetJokesProps,
  IGetManyJokesProps,
  IGetSafeJokesProps,
  IJoke,
  ILanguage,
} from './types';
import jokes from './data/jokes.json';
import langcodes from './data/langcode.json';
import categories from './data/categories.json';
import filterSafeJokes from './utils/filterSafeJokes';

export class Joke {
  getJokeById(id: GetJokeByIdProp): null | IJoke {
    const filtered = jokes.filter((joke) => joke.id === id);
    return filtered.length > 0 ? filtered[0] : null;
  }

  getJoke({ category = 'programming', lang = 'en' }: IGetJokesProps): IJoke | null {
    const filtered = jokes.filter((joke) => joke.category === category && joke.langCode === lang);
    return filtered.length > 0 ? filtered[0] : null;
  }

  getManyJokes({
    category = 'programming',
    lang = 'en',
    range = 10,
  }: IGetManyJokesProps): IJoke[] | null {
    const filtered = jokes.filter((joke) => joke.category === category && joke.langCode === lang);
    return filtered.length > 0 ? filtered.slice(0, range) : null;
  }

  getJokeByKeyword(tags: string[], range: number = 10): IJoke[] | null {
    const filtered = jokes.filter((joke) => joke.tags.some((tag) => tags.includes(tag)));
    return filtered.length > 0 ? filtered.slice(0, range) : null;
  }

  getRandomJoke(lang: string = 'en'): IJoke | null {
    const filtered = jokes.filter((joke) => joke.langCode === lang);
    return filtered.length > 0 ? filtered[0] : null;
  }

  getSafeJokes({
    category = 'programming',
    lang = 'en',
    range = 10,
  }: IGetSafeJokesProps): IJoke[] | null {
    const filtered = jokes.filter((joke) => joke.category === category && joke.langCode === lang);
    const safeJokes = filterSafeJokes(filtered);
    return safeJokes.length > 0 ? safeJokes.slice(0, range) : null;
  }

  getLanguages(): ILanguage[] {
    return langcodes;
  }

  getCategories(): ICategory[] {
    return categories;
  }
}
