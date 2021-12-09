import countUniques from './countUniques';
import decodeNumbers from './decodeNumbers';
import getInput from './getInput';

const input = getInput();
const rows = input
  .split('\n')
  .filter((row) => row)
  .map((row) => row.split(' | ').map((text) => text.split(' ')));

console.log(
  `Number of unique occurrences: ${rows.reduce(
    (acc, [, code]) => acc + countUniques(code),
    0
  )}`
);

console.log(
  `Sum of all outputs: ${rows.reduce(
    (acc, [key, code]) => (acc += decodeNumbers(key, code)),
    0
  )}`
);
