import getPairs from './getPairs';
import insertElement from './insertElement';
import joinPairs from './joinPairs';

function runPairInsertions(input: string, steps: number) {
  let [polymerTemplate, pairInsertionsString] = input.split('\n\n');
  const pairInsertions = pairInsertionsString
    .split('\n')
    .map((line) => line.split(' -> '));

  for (let i = 0; i < steps; i++) {
    polymerTemplate = joinPairs(
      getPairs(polymerTemplate).reduce<string[]>((acc, curr) => {
        const insertion = pairInsertions.find(([pair]) => pair === curr);

        if (!insertion) {
          return acc;
        }

        return [...acc, insertElement(curr, insertion[1])];
      }, [])
    );
  }

  return polymerTemplate;
}

export default runPairInsertions;
