import {
  GetJokeByIdProp,
  ICategory,
  IGetJokesProps,
  IGetManyJokesProps,
  IGetSafeJokesProps,
  IJoke,
  ILanguage,
  Lang,
} from './types';
import jokesJson from './data/jokes.json';
import langCodesJson from './data/langcode.json';
import categoriesJson from './data/categories.json';
import filterSafeJokes from './utils/filterSafeJokes';
import { provideRandomCategory } from './utils/randomCategoryProvider';

const jokes: IJoke[] = jokesJson as IJoke[];
const langs: ILanguage[] = langCodesJson as ILanguage[];
const categories: ICategory[] = categoriesJson as ICategory[];

export class Joke {
  /**
   * Retrieves a joke by its unique ID.
   *
   * @param id - The ID of the joke to retrieve.
   * @returns The matching joke object if found, otherwise `null`.
   */
  getJokeById(id: GetJokeByIdProp): null | IJoke {
    const filtered: IJoke[] = jokes.filter((joke) => joke.id === id);
    return filtered.length > 0 ? filtered[0] : null;
  }

  /**
   * Retrieves a single joke based on the specified category and language.
   *
   * @param category - The category of the joke (defaults to `"programming"` if not provided).
   * @param lang - The language code for the joke (defaults to `"en"` if not provided).
   * @returns A matching joke object if found, otherwise `null`.
   */
  getJoke({ category = provideRandomCategory(), lang = 'en' }: IGetJokesProps): IJoke | null {
    const filtered = jokes.filter((joke) => joke.category === category && joke.langCode === lang);
    return filtered.length > 0 ? filtered[0] : null;
  }

  /**
   * Retrieves multiple jokes based on the specified category, language, and range.
   *
   * @param category - The category of jokes to retrieve (defaults to `"programming"`).
   * @param lang - The language code for the jokes (defaults to `"en"`).
   * @param range - The maximum number of jokes to return (defaults to `10`).
   * @returns An array of jokes matching the filters, limited by the given range, or `null` if no jokes are found.
   */
  getManyJokes({
    category = provideRandomCategory(),
    lang = 'en',
    range = 10,
  }: IGetManyJokesProps): IJoke[] | null {
    const filtered = jokes.filter((joke) => joke.category === category && joke.langCode === lang);
    return filtered.length > 0 ? filtered.slice(0, range) : null;
  }

  /**
   * Retrieves jokes that contain at least one of the specified keyword tags.
   *
   * @param tags - An array of keyword tags to match against joke tags.
   * @param range - The maximum number of jokes to return (defaults to `10`).
   * @returns An array of jokes that match at least one tag, limited by the given range, or `null` if no matches are found.
   */
  getJokeByKeyword(tags: string[], range: number = 10): IJoke[] | null {
    const filtered = jokes.filter((joke) => joke.tags.some((tag) => tags.includes(tag)));
    return filtered.length > 0 ? filtered.slice(0, range) : null;
  }

  /**
   * Retrieves a random joke in the specified language.
   *
   * @param lang - The language code of the joke (defaults to `"en"` for English).
   * @returns A joke object in the given language if available, otherwise `null`.
   */
  getRandomJoke(lang: Lang = 'en'): IJoke | null {
    const filtered = jokes.filter((joke) => joke.langCode === lang);
    return filtered.length > 0 ? filtered[Math.floor(Math.random() * filtered.length)] : null;
  }

  /**
   * Retrieves a list of safe jokes based on the specified category, language, and range.
   * Safe jokes are filtered using the `filterSafeJokes` utility.
   *
   * @param category - The category of jokes to retrieve (defaults to `"programming"`).
   * @param lang - The language code for the jokes (defaults to `"en"`).
   * @param range - The maximum number of safe jokes to return (defaults to `10`).
   * @returns An array of safe jokes limited by the given range, or `null` if no safe jokes are found.
   */
  getSafeJokes({
    category = provideRandomCategory(),
    lang = 'en',
    range = 10,
  }: IGetSafeJokesProps): IJoke[] | null {
    const filtered = jokes.filter((joke) => joke.category === category && joke.langCode === lang);
    const safeJokes = filterSafeJokes(filtered);
    return safeJokes.length > 0 ? safeJokes.slice(0, range) : null;
  }

  /**
   * Retrieves the list of supported languages.
   *
   * @returns An array of language objects, each containing a language code and its corresponding name.
   */
  getLanguages(): ILanguage[] {
    return langs;
  }

  /**
   * Retrieves the list of available joke categories.
   *
   * @returns An array of category objects, each containing the category name.
   */
  getCategories(): ICategory[] {
    return categories;
  }
}
