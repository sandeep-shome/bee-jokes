import { beforeEach, describe, expect, it, Mock, vi } from 'vitest';
import { Joke } from '..';
import { provideRandomCategory } from '../utils/randomCategoryProvider';

vi.mock('../utils/randomCategoryProvider', () => ({
  provideRandomCategory: vi.fn(),
}));

vi.mock('../data/jokes.json', () => ({
  default: [
    {
      id: 'j1',
      joke: 'Mocked joke 1',
      category: 'programming',
      langCode: 'en',
      tags: ['funny'],
    },
    {
      id: 'j2',
      joke: 'Mocked joke 2',
      category: 'dadjokes',
      langCode: 'en',
      tags: ['dad'],
    },
  ],
}));

vi.mock('../data/langcode.json', () => ({
  default: [
    { code: 'en', language: 'English' },
    { code: 'hi', language: 'Hindi' },
    { code: 'es', language: 'Spanish' },
    { code: 'fr', language: 'French' },
  ],
}));

vi.mock('../data/categories.json', () => ({
  default: [
    {
      name: 'programming',
      description: 'Jokes for developers, coders, and software engineers.',
    },
    {
      name: 'general',
      description: 'Light-hearted and everyday jokes for everyone.',
    },
    {
      name: 'dadjokes',
      description: 'Classic groan-worthy dad jokes and puns.',
    },
  ],
}));

const joke = new Joke();

describe('getJokeById', () => {
  it('should return a joke object based on the id otherwise null', () => {
    const res = joke.getJokeById('j2');
    expect(res).toEqual({
      id: 'j2',
      joke: 'Mocked joke 2',
      category: 'dadjokes',
      langCode: 'en',
      tags: ['dad'],
    });
  });

  it('Should return null as no joke match with the id', () => {
    const res = joke.getJokeById('j3');
    expect(res).toBeNull();
  });
});

describe('getAllJokes', () => {
  it('should return all jokes as an array', () => {
    const res = joke.getAllJokes();
    expect(res).toEqual([
      {
        id: 'j1',
        joke: 'Mocked joke 1',
        category: 'programming',
        langCode: 'en',
        tags: ['funny'],
      },
      {
        id: 'j2',
        joke: 'Mocked joke 2',
        category: 'dadjokes',
        langCode: 'en',
        tags: ['dad'],
      },
    ]);
  });
});

describe('getJoke', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should return joke with matching category & lang', () => {
    (provideRandomCategory as Mock).mockReturnValue('programming');
    const res = joke.getJoke({});
    expect(res).toEqual({
      id: 'j1',
      joke: 'Mocked joke 1',
      category: 'programming',
      langCode: 'en',
      tags: ['funny'],
    });
  });

  it('should return null as category not matching', () => {
    (provideRandomCategory as Mock).mockReturnValue('unknown');
    const res = joke.getJoke({});
    expect(res).toBeNull();
  });

  it('should return joke with matching category & lang', () => {
    (provideRandomCategory as Mock).mockReturnValue('programming');
    const res = joke.getJoke({ category: 'dadjokes' });
    expect(res).toEqual({
      id: 'j2',
      joke: 'Mocked joke 2',
      category: 'dadjokes',
      langCode: 'en',
      tags: ['dad'],
    });
  });

  it('should return null as lang not matching', () => {
    (provideRandomCategory as Mock).mockReturnValue('programming');
    const res = joke.getJoke({ lang: 'hi' });
    expect(res).toBeNull();
  });
});

describe('getManyJokes', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should return jokes with matching  default category lang & range', () => {
    (provideRandomCategory as Mock).mockReturnValue('programming');
    const res = joke.getManyJokes({});
    expect(res).toEqual([
      {
        id: 'j1',
        joke: 'Mocked joke 1',
        category: 'programming',
        langCode: 'en',
        tags: ['funny'],
      },
    ]);
  });

  it('should return null as category not matching', () => {
    (provideRandomCategory as Mock).mockReturnValue('unknown');
    const res = joke.getManyJokes({});
    expect(res).toBeNull();
  });

  it('should return jokes with matching user defined category & default lang & range', () => {
    (provideRandomCategory as Mock).mockReturnValue('programming');
    const res = joke.getManyJokes({ category: 'dadjokes' });
    expect(res).toEqual([
      {
        id: 'j2',
        joke: 'Mocked joke 2',
        category: 'dadjokes',
        langCode: 'en',
        tags: ['dad'],
      },
    ]);
  });

  it('should return null as lang not matching', () => {
    (provideRandomCategory as Mock).mockReturnValue('programming');
    const res = joke.getManyJokes({ lang: 'hi' });
    expect(res).toBeNull();
  });
});

describe('getJokesByKeywords', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should return jokes with matching keywords & default range', () => {
    const res = joke.getJokeByKeyword(['funny', 'dad']);
    expect(res).toEqual([
      {
        id: 'j1',
        joke: 'Mocked joke 1',
        category: 'programming',
        langCode: 'en',
        tags: ['funny'],
      },
      {
        id: 'j2',
        joke: 'Mocked joke 2',
        category: 'dadjokes',
        langCode: 'en',
        tags: ['dad'],
      },
    ]);
  });

  it('should return null as keywords not matched', () => {
    const res = joke.getJokeByKeyword(['fun', 'mom']);
    expect(res).toBeNull();
  });

  it('should return jokes with matching keywords & range = 1', () => {
    const res = joke.getJokeByKeyword(['funny', 'dad'], 1);
    expect(res).toEqual([
      {
        id: 'j1',
        joke: 'Mocked joke 1',
        category: 'programming',
        langCode: 'en',
        tags: ['funny'],
      },
    ]);
  });
});

describe('getRandomJoke', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should return a random joke with default lang', () => {
    const res = joke.getRandomJoke();
    const validIds = ['j1', 'j2'];
    expect(res).not.toBeNull();
    expect(validIds).toContain(res?.id);
  });

  it('should return null as unmatched lang', () => {
    const res = joke.getRandomJoke('hi');
    expect(res).toBeNull();
  });
});

describe('getSafeJoke', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should return a jokes with matched params and safe words', () => {
    (provideRandomCategory as Mock).mockReturnValue('programming');
    const res = joke.getSafeJokes({});
    expect(res).not.toBeNull();
    expect(res).toEqual([
      {
        id: 'j1',
        joke: 'Mocked joke 1',
        category: 'programming',
        langCode: 'en',
        tags: ['funny'],
      },
    ]);
  });
});

describe('getLanguages', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should return all lang coeds with corresponding language', () => {
    const res = joke.getLanguages();
    expect(res).not.toBeNull();
    expect(res).toEqual([
      { code: 'en', language: 'English' },
      { code: 'hi', language: 'Hindi' },
      { code: 'es', language: 'Spanish' },
      { code: 'fr', language: 'French' },
    ]);
  });
});

describe('getCategories', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should return all lang coeds with corresponding language', () => {
    const res = joke.getCategories();
    expect(res).not.toBeNull();
    expect(res).toEqual([
      {
        name: 'programming',
        description: 'Jokes for developers, coders, and software engineers.',
      },
      {
        name: 'general',
        description: 'Light-hearted and everyday jokes for everyone.',
      },
      {
        name: 'dadjokes',
        description: 'Classic groan-worthy dad jokes and puns.',
      },
    ]);
  });
});
