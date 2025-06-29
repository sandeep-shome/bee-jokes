![Logo](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/th5xamgrr6se0x5ro4g6.png)

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

## bee-jokes

bee-jokes is a lightweight TypeScript/JavaScript package that delivers clean, categorized, and multilingual jokes — fast and ready to sting your apps with humor! Fetch jokes by ID, tag, category, or at random and keep your projects buzzing with laughter.

## ⬇️ Installation

Install bee-jokes with npm

```bash
md my-project
cd my-project
npm install bee-jokes
```

## 💿 Usage/Examples

```javascript
import { Joke } from 'bee-jokes';
// const {Joke} = require("bee-jokes")

const joke = new Joke();
const my_joke = joke.getJoke({});
console.log(my_joke);

/* Output
{
    "id": "travel-001",
    "joke": "I used to be a travel agent, but I gave it up. It was just too much baggage.",
    "category": "travel",
    "langCode": "en",
    "tags": ["agent", "luggage", "pun"]
} */
```

## 🧰 All functions

Usage and paramter list of all avilable functions

### `getJokeById()`

Retrieves a joke by its unique ID.

```javascript
import { Joke } from 'bee-jokes';

const joke = new Joke();
const my_joke = joke.getJokeById('programming-001');
console.log(my_joke);

/* Output
  {
    "id": "programming-001",
    "joke": "Why do programmers prefer dark mode? Because light attracts bugs.",
    "category": "programming",
    "langCode": "en",
    "tags": ["bugs", "dark-mode", "developer"]
  } */
```

| Parameter | Type     | required | Description                     |
| --------- | -------- | -------- | ------------------------------- |
| `id`      | `string` | `True`   | The ID of the joke to retrieve. |

**Returns:** `IJoke | null` — The matching joke object if found, otherwise `null`.

### `getAllJokes()`

Retrieves all jokes.

```javascript
import { Joke } from 'bee-jokes';

const joke = new Joke();
const all_jokes = joke.getAllJokes();
console.log(all_jokes);

/* Output
[
      {
    "id": "programming-001",
    "joke": "Why do programmers prefer dark mode? Because light attracts bugs.",
    "category": "programming",
    "langCode": "en",
    "tags": ["bugs", "dark-mode", "developer"]
  },
  {
    "id": "travel-001",
    "joke": "I used to be a travel agent, but I gave it up. It was just too much baggage.",
    "category": "travel",
    "langCode": "en",
    "tags": ["agent", "luggage", "pun"]
  }
...
] */
```

| Parameter | Type | required | Description                        |
| --------- | ---- | -------- | ---------------------------------- |
| `-`       | `-`  | `-`      | This function takes no parameters. |

**Returns:** `IJoke[] | null` — The matching joke object if found, otherwise `null`.

### `getJoke()`

Retrieves a single joke based on the specified category and language.

```javascript
import { Joke } from 'bee-jokes';

const joke = new Joke();
const my_joke = joke.getJoke({ category: 'programming', lang: 'en' });
console.log(my_joke);

/* Output
  {
    "id": "programming-001",
    "joke": "Why do programmers prefer dark mode? Because light attracts bugs.",
    "category": "programming",
    "langCode": "en",
    "tags": ["bugs", "dark-mode", "developer"]
  } */
```

| Parameter  | Type     | required | Description                                                               |
| ---------- | -------- | -------- | ------------------------------------------------------------------------- |
| `category` | `string` | `False`  | The category of the joke (defaults to a random category if not provided). |
| `lang`     | `string` | `False`  | The language code for the joke (defaults to "en" if not provided).        |

**Returns:** `IJoke | null` — The matching joke object if found, otherwise `null`.

### `getManyJokes()`

Retrieves multiple jokes based on the specified category, language, and range.

```javascript
import { Joke } from 'bee-jokes';

const joke = new Joke();
const jokes = joke.getManyJokes({ category: 'programming', lang: 'en', range: 5 });
console.log(jokes);

/* Output
[
      {
    "id": "programming-001",
    "joke": "Why do programmers prefer dark mode? Because light attracts bugs.",
    "category": "programming",
    "langCode": "en",
    "tags": ["bugs", "dark-mode", "developer"]
  },
  {
    "id": "programming-002",
    "joke": "Why do programmers always mix up Halloween and Christmas? Because Oct 31 == Dec 25!",
    "category": "programming",
    "langCode": "en",
    "tags": ["dates", "binary", "developer"]
  },
...
] */
```

| Parameter  | Type     | required | Description                                                               |
| ---------- | -------- | -------- | ------------------------------------------------------------------------- |
| `category` | `string` | `False`  | The category of the joke (defaults to a random category if not provided). |
| `lang`     | `string` | `False`  | The language code for the joke (defaults to "en" if not provided).        |
| `range`    | `number` | `False`  | The maximum number of jokes to return (defaults to 10)                    |

**Returns:** `IJoke[] | null` — The matching joke object if found, otherwise `null`.

### `getJokeByKeyword()`

Retrieves jokes that contain at least one of the specified keyword tags.

```javascript
import { Joke } from 'bee-jokes';

const joke = new Joke();
const jokes = joke.getJokeByKeyword(['bugs', 'developer'], 5);
console.log(jokes);

/* Output
  [  
      {
    "id": "programming-001",
    "joke": "Why do programmers prefer dark mode? Because light attracts bugs.",
    "category": "programming",
    "langCode": "en",
    "tags": ["bugs", "dark-mode", "developer"]
  },
  ...
]
   */
```

| Parameter | Type     | required | Description                                            |
| --------- | -------- | -------- | ------------------------------------------------------ |
| `tags`    | `array`  | `true`   | An array of keyword tags to match against joke tags.   |
| `range`   | `number` | `False`  | The maximum number of jokes to return (defaults to 10) |

### `getRandomJoke()`

Retrieves a random joke in the specified language.

```javascript
import { Joke } from 'bee-jokes';

const joke = new Joke();
const randomJoke = joke.getRandomJoke('en');
console.log(randomJoke);

/* Output
  {
    "id": "programming-002",
    "joke": "Why do programmers always mix up Halloween and Christmas? Because Oct 31 == Dec 25!",
    "category": "programming",
    "langCode": "en",
    "tags": ["dates", "binary", "developer"]
    }
*/
```

| Parameter | Type     | required | Description                                                        |
| --------- | -------- | -------- | ------------------------------------------------------------------ |
| `lang`    | `string` | `False`  | The language code for the joke (defaults to "en" if not provided). |

**Returns:** `IJoke | null` — The matching joke object if found, otherwise `null`.

### `getSafeJokes()`

Retrieves a list of safe jokes based on the specified category, language, and range.  
Safe jokes are filtered using the `filterSafeJokes` utility.

```javascript
import { Joke } from 'bee-jokes';

const joke = new Joke();
const safeJokes = joke.getSafeJokes({ category: 'programming', lang: 'en', range: 5 });
console.log(safeJokes);

/* Output
  {
    "id": "programming-002",
    "joke": "Why do programmers always mix up Halloween and Christmas? Because Oct 31 == Dec 25!",
    "category": "programming",
    "langCode": "en",
    "tags": ["dates", "binary", "developer"]
    }
*/
```

| Parameter  | Type     | required | Description                                                               |
| ---------- | -------- | -------- | ------------------------------------------------------------------------- |
| `category` | `string` | `False`  | The category of the joke (defaults to a random category if not provided). |
| `lang`     | `string` | `False`  | The language code for the joke (defaults to "en" if not provided).        |
| `range`    | `number` | `False`  | The maximum number of jokes to return (defaults to 10)                    |

**Returns:** `IJoke[] | null` — The matching joke object if found, otherwise `null`.

### `getLanguages()`

Retrieves the list of supported languages.

```javascript
import { Joke } from 'bee-jokes';

const joke = new Joke();
const languages = joke.getLanguages();
console.log(languages);

/* Output
  [
  {
    "name": "programming",
    "description": "Jokes for developers, coders, and software engineers."
  },
  {
    "name": "general",
    "description": "Light-hearted and everyday jokes for everyone."
  },
  {
    "name": "dadjokes",
    "description": "Classic groan-worthy dad jokes and puns."
  },
  ...
  ]
*/
```

| Parameter | Type | required | Description                        |
| --------- | ---- | -------- | ---------------------------------- |
| `-`       | `-`  | `-`      | This function takes no parameters. |

**Returns:** `ILanguage[] | null` — An array of language objects, each containing a language code and its corresponding name..

### `getCategories()`

Retrieves the list of available joke categories.

```javascript
import { Joke } from 'bee-jokes';

const joke = new Joke();
const categories = joke.getCategories();
console.log(categories);

/* Output
  [
  { "code": "en", "language": "English" },
  { "code": "hi", "language": "Hindi" },
  { "code": "es", "language": "Spanish" },
  ...
  ]
*/
```

| Parameter | Type | required | Description                        |
| --------- | ---- | -------- | ---------------------------------- |
| `-`       | `-`  | `-`      | This function takes no parameters. |

**Returns:** `ICategory[] | null` — An array of category objects, each containing the category name..

## 🧩 Features

- Minimal setup
- New Jokes every month
- Open source
- Accepting contributions

## 🧱 Tech Stack

Node, Typescript, Tsup, Eslint, Husky, Prettier

## 📎Appendix

bee-jokes is an open-source project developed and maintained by a solo developer with a passion for clean code, creativity, and community-driven tools.

You're welcome to explore, use, and contribute to the project! Whether it's fixing a bug, suggesting a feature, or improving the documentation — your contributions are highly appreciated.

Feel free to check out the GitHub repository and join in making this project better for everyone. Let's build something fun together! 💡

## 🗺️ Roadmap

- Additional browser support
- Add more jokes
- Add more features & filters

## 👨‍💻 Authors

[@Sandeep Shome](https://github.com/sandeep-shome)

## 📄 License

[MIT](https://choosealicense.com/licenses/mit/)

## 🙋‍♂️ Support

For support, email sandeepshome.dev@gmail.com
