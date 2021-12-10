import { CHARACTER_VALUES } from './consts';
import getCorruptCharacter from './getCorruptCharacter';
import getInput from './getInput';

const input = getInput().split('\n');

console.log(
  `Syntax error score: ${input
    .map(getCorruptCharacter)
    .filter((character) => character)
    .reduce((acc, curr) => (acc += CHARACTER_VALUES[curr!] ?? 0), 0)}`
);
