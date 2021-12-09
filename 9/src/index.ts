import convertNumbersToPoints from './convertNumbersToPoints';
import getAllBasins from './getAllBasins';
import getAllLowPoints from './getAllLowPoints';
import getInput from './getInput';
import getRiskLevels from './getRiskLevels';
import stringToNumberArray from './stringToNumberArray';

const input = convertNumbersToPoints(
  getInput()
    .split('\n')
    .map<number[]>((row) => stringToNumberArray(row))
);

console.log(
  `Sum of risk levels: ${getRiskLevels(
    getAllLowPoints(input).map(([point]) => point)
  ).reduce((acc, curr) => acc + curr)}`
);

console.log(
  `Size product of the three largest basins: ${getAllBasins(input)
    .map((basin) => basin.length)
    .sort((a, b) => b - a)
    .slice(0, 3)
    .reduce((acc, curr) => acc * curr)}`
);
