import getAllLowPoints from './getAllLowPoints';
import getInput from './getInput';
import getRiskLevels from './getRiskLevels';

const input = getInput().split('\n');

console.log(
  `Sum of risk levels: ${getRiskLevels(getAllLowPoints(input)).reduce(
    (acc, curr) => acc + curr
  )}`
);
