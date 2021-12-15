import Cell from './Cell';
import findBestUnvisited from './findBestUnvisited';
import generatePath from './generatePath';
import updateNeighbours from './updateNeighbours';

function findPath(start: Cell, end: Cell, allCells: Cell[]): Cell[] {
  let current = start;

  start.riskFromStart = 0;
  start.risk = 0;
  start.visited = true;

  updateNeighbours(start);

  while ((current = findBestUnvisited(allCells)!)) {
    current.visited = true;

    if (current === end) {
      continue;
    }

    updateNeighbours(current);
  }

  return generatePath(end);
}

export default findPath;