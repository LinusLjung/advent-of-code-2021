import { UNIQUE_COMBINATIONS } from './consts';

const uniqueLengths = Object.values(UNIQUE_COMBINATIONS);

function countUniques(input: string[]) {
  return input
    .map((input) => input.length)
    .reduce((acc, curr) => {
      if (uniqueLengths.includes(curr)) {
        return acc + 1;
      }

      return acc;
    }, 0);
}

export default countUniques;
