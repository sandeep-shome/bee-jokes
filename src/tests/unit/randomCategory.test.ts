import { describe, it, expect } from 'vitest';
import { Category } from '../../types';
import { provideRandomCategory } from '../../utils/randomCategoryProvider';

const ALL_CATEGORIES: Category[] = [
  'programming',
  'general',
  'dadjokes',
  'puns',
  'science',
  'officelife',
  'animals',
  'relationships',
  'school',
];

describe('provideRandomCategory', () => {
  it('should return a random category', () => {
    const category: Category = provideRandomCategory();
    expect(ALL_CATEGORIES).toContain(category);
  });
});
