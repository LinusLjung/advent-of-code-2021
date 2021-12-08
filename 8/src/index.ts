import countUniques from './countUniques';
import getInput from './getInput';

const input = getInput();
const rows = input
  .split('\n')
  .filter((row) => row)
  .map((row) => row.split(' | ').map((text) => text.split(' ')));

console.log(rows.reduce((acc, [key, code]) => acc + countUniques(code), 0));
