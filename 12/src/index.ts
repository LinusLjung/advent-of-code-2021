import getInput from './getInput';
import getPaths from './getPaths';
import hasOccurrences from './hasOccurrences';
import isUpperCase from './isUpperCase';

const input = getInput()
  .split('\n')
  .map((line) => line.split('-'));

const completedPaths: string[][] = [];

function goPath(to: string, input: string[][], fullPath: string[]) {
  if (to === 'end') {
    completedPaths.push([...fullPath, to]);

    return;
  }

  fullPath = [...fullPath, to];

  let paths = getPaths(to, input).filter(([, to]) => {
    if (isUpperCase(to)) {
      return true;
    }

    if (to === 'start') {
      return false;
    }

    const hasTwoSmall = fullPath
      .filter((cave) => !isUpperCase(cave))
      .some((cave) => hasOccurrences(cave, fullPath, 2));

    return !hasTwoSmall || !fullPath.includes(to);
  });

  paths.forEach((path) => goPath(path[1], input, fullPath));
}

getPaths('start', input).forEach(([from, to]) => {
  goPath(to, input, [from]);
});

console.log(`Number of distinct paths: ${completedPaths.length}`);
