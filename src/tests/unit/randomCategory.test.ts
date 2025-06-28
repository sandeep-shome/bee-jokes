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
  'food',
  'sports',
  'history',
  'travel',
  'medical',
  'tech',
  'music',
  'financial',
  'popculture',
  'holiday',
  'family',
  'sarcasm',
];

describe('provideRandomCategory', () => {
  it('should return a random category', () => {
    const category: Category = provideRandomCategory();
    expect(ALL_CATEGORIES).toContain(category);
  });
});
