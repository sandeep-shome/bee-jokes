import { IJoke } from '../types';
import { unsafeWords } from './unsafeWords';

const filterSafeJokes = (jokes: IJoke[]) => {
  const safeJokes = jokes.filter(
    (joke) =>
      !joke.joke
        .toLocaleLowerCase()
        .split('')
        .some((word) => unsafeWords.includes(word)),
  );
  return safeJokes;
};

export default filterSafeJokes;
