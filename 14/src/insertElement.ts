import { Counter } from './types';

function addToCounter(counter: Counter, key: string, value: number): Counter {
  if (counter[key]) {
    counter[key] += value;
  } else {
    counter[key] = value;
  }

  return counter;
}

function insertElement(
  pair: string,
  insert: string,
  originalPairs: Counter,
  pairs: Counter,
  occurrences: Counter
): [Counter, Counter] {
  const oldCount = originalPairs[pair];

  pairs[pair] -= oldCount;

  const newPair = pair[0] + insert;
  const newPair2 = insert + pair[1];

  addToCounter(pairs, newPair, oldCount);
  addToCounter(pairs, newPair2, oldCount);
  addToCounter(occurrences, insert, oldCount);

  return [pairs, occurrences];
}

export default insertElement;
