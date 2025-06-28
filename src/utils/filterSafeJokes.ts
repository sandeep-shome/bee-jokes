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

const filterSafeJokes = (jokes: IJoke[]): IJoke[] => {
  return jokes.filter(
    (joke) =>
      !joke.joke
        .toLocaleLowerCase()
        .split(/\s+/) // split by spaces, tabs, etc.
        .some((word) => unsafeWords.includes(word)),
  );
};

export default filterSafeJokes;
