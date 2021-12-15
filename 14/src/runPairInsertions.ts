import countOccurrences from './countOccurrences';
import getPairs from './getPairs';
import insertElement from './insertElement';
import { Counter } from './types';

function runPairInsertions(input: string, steps: number): Counter {
  let [polymerTemplate, pairInsertionsString] = input.split('\n\n');
  const pairInsertions = pairInsertionsString
    .split('\n')
    .map((line) => line.split(' -> '));

  let occurrences = countOccurrences(polymerTemplate);
  let pairs = getPairs(polymerTemplate).reduce<Counter>((acc, curr) => {
    if (acc[curr]) {
      acc[curr]++;
    } else {
      acc[curr] = 1;
    }

    return acc;
  }, {});

  for (let i = 0; i < steps; i++) {
    let copiedPairs = { ...pairs };

    for (let pair of Object.keys(pairs)) {
      const insertion = pairInsertions.find(
        (insertion) => insertion[0] === pair
      );

      if (insertion && pairs[pair]) {
        insertElement(pair, insertion[1], pairs, copiedPairs, occurrences);
      }
    }

    pairs = copiedPairs;
  }

  return occurrences;
}

export default runPairInsertions;
