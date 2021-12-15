import createCells from './createCells';
import createGrid from './createGrid';
import expandGrid from './expandGrid';
import getInput from './getInput';
import getRiskLevel from './getRiskLevel';

const [input, times] = getInput();

const grid = expandGrid(createGrid(input), times);
console.log('grid[0].length, grid.length', grid[0].length, grid.length);

console.log(
  'Risk level: ',
  getRiskLevel(createCells(expandGrid(createGrid(input), times)))
);
