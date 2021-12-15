import { Counter } from './types';

function countOccurrences(chars: string): Counter {
  const counter: Counter = {};

  chars.split('').forEach((char) => {
    if (counter[char]) {
      counter[char] = counter[char] + 1;
    } else {
      counter[char] = 1;
    }
  });

  return counter;
}

export default countOccurrences;
