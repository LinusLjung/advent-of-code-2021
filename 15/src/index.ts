import createCells from './createCells';
import createGrid from './createGrid';
import expandGrid from './expandGrid';
import getInput from './getInput';
import getRiskLevel from './getRiskLevel';

const [input, times] = getInput();

console.log(
  'Risk level: ',
  getRiskLevel(createCells(expandGrid(createGrid(input), times)))
);
