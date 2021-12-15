import increaseNumber from './increaseNumber';

const CAP = 10;
const MIN = 1;

function expandGrid(grid: number[][], times: number): number[][] {
  const newGrid = grid.map((row) => [...row]);

  for (let i = 1; i < times; i++) {
    for (let row = 0; row < grid.length; row++) {
      newGrid[row] = newGrid[row].concat(
        grid[row].map((cell) => increaseNumber(cell, i, CAP, MIN))
      );
    }
  }

  for (let i = 1; i < times; i++) {
    for (let row = 0; row < grid.length; row++) {
      newGrid.push(newGrid[row].map((cell) => increaseNumber(cell, i, CAP, MIN)));
    }
  }

  return newGrid;
}

export default expandGrid;
