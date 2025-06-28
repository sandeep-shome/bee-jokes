import categoryJson from '../data/categories.json';
import { Category, ICategory } from '../types';

const categoryData = categoryJson as ICategory[];

/**
 * Returns a random joke category from the list of available categories.
 *
 * @returns A randomly selected category.
 */
export const provideRandomCategory = (): Category => {
  const categoryNameOnly: Category[] = categoryData.map((cate) => cate.name);
  const randomIndex = Math.floor(Math.random() * categoryNameOnly.length);
  if (categoryNameOnly.length === 0) {
    throw new Error('No categories available to choose from.');
  }
  return categoryNameOnly[randomIndex];
};
