import { describe, expect, it } from 'vitest';
import filterSafeJokes from '../../utils/filterSafeJokes';
import { IJoke } from '../../types';

const MOCK_SAFE_JOKES: IJoke[] = [
  {
    id: 'programming-001',
    joke: 'Why do programmers prefer dark mode? Because light attracts bugs.',
    category: 'programming',
    langCode: 'en',
    tags: ['bugs', 'dark-mode', 'developer'],
  },
  {
    id: 'general-001',
    joke: 'Why don’t scientists trust atoms? Because they make up everything!',
    category: 'general',
    langCode: 'en',
    tags: ['science', 'pun'],
  },
];

const MOCK_PARTIAL_UNSAFE_JOKES: IJoke[] = [
  {
    id: 'programming-001',
    joke: 'Why do programmers prefer dark mode? Because light porn sex.',
    category: 'programming',
    langCode: 'en',
    tags: ['bugs', 'dark-mode', 'developer'],
  },
  {
    id: 'general-001',
    joke: 'Why don’t scientists trust atoms? Because they make up everything!',
    category: 'general',
    langCode: 'en',
    tags: ['science', 'pun'],
  },
];

const MOCK__UNSAFE_JOKES: IJoke[] = [
  {
    id: 'programming-001',
    joke: 'Why do programmers prefer dark mode? Because light sex attracts.',
    category: 'programming',
    langCode: 'en',
    tags: ['bugs', 'dark-mode', 'developer'],
  },
  {
    id: 'general-001',
    joke: 'Why don’t scientists trust atoms? Because they make up porn',
    category: 'general',
    langCode: 'en',
    tags: ['science', 'pun'],
  },
];

describe('filterSafeJokes', () => {
  it('should return all the jokes as all jokes are safe', () => {
    const result = filterSafeJokes(MOCK_SAFE_JOKES);
    expect(result).toEqual(MOCK_SAFE_JOKES);
  });

  it('should return only one joke as another one contain unsafe word', () => {
    const result = filterSafeJokes(MOCK_PARTIAL_UNSAFE_JOKES);
    expect(result).toEqual([
      {
        id: 'general-001',
        joke: 'Why don’t scientists trust atoms? Because they make up everything!',
        category: 'general',
        langCode: 'en',
        tags: ['science', 'pun'],
      },
    ]);
  });

  it('should return empty array as all jokes contain unsafe words', () => {
    const result = filterSafeJokes(MOCK__UNSAFE_JOKES);
    expect(result).toEqual([]);
  });
});
