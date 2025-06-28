import { IJoke } from '../types';

const unsafeWords = [
  'sex',
  'sexual',
  'porn',
  'porno',
  'nude',
  'naked',
  'violence',
  'kill',
  'murder',
  'blood',
  'racist',
  'suicide',
  'drug',
  'drugs',
  'alcohol',
  'beer',
  'bastard',
  'asshole',
  'damn',
  'shit',
  'fuck',
  'fucking',
  'bitch',
  'dick',
  'pussy',
  'cock',
  'boobs',
  'nipples',
  'slut',
  'whore',
  'gay',
  'lesbian',
  'rape',
  'molest',
  'abuse',
  'terrorist',
  'terrorism',
  'bomb',
  'gun',
  'shoot',
  'hitler',
  'nazis',
];

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
