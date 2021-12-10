import { CORRUPT_CHARACTER_VALUES } from './consts';
import completeCode from './completeCode';
import getInput from './getInput';
import { Character } from './types';
import calculateAutocompleteScore from './calculateAutocompleteScore';

const input = getInput().split('\n');

console.log(
  `Syntax error score: ${input
    .map((code) => {
      try {
        completeCode(code);
      } catch (e) {
        if (typeof e === 'string') {
          return e;
        }

        throw e;
      }
    })
    .filter((character) => character)
    .reduce(
      (acc, curr) => (acc += CORRUPT_CHARACTER_VALUES[curr as Character] ?? 0),
      0
    )}`
);

const autocompleteScores = input
  .map((code) => {
    try {
      return completeCode(code);
    } catch (e) {
      if (typeof e === 'string') {
        return;
      }

      throw e;
    }
  })
  .filter((code) => code)
  .map((code) => code as [string, string])
  .map(([, completedCharacters]) =>
    calculateAutocompleteScore(completedCharacters)
  )
  .sort((a, b) => a - b);

console.log(
  `Autocomplete score: ${
    autocompleteScores[Math.floor(autocompleteScores.length / 2)]
  }`
);
