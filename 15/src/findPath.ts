import Cell from './Cell';
import findBestUnvisited from './findBestUnvisited';
import generatePath from './generatePath';
import updateNeighbours from './updateNeighbours';

function findPath(start: Cell, end: Cell, allCells: Cell[]): Cell[] {
  let current = start;
  const unvisited: Cell[] = [];

  start.riskFromStart = 0;
  start.risk = 0;
  start.visited = true;

  updateNeighbours(start, unvisited);

  while ((current = findBestUnvisited(unvisited)!)) {
    current.visited = true;

    unvisited.splice(unvisited.indexOf(current), 1);

    if (current === end) {
      continue;
    }

    updateNeighbours(current, unvisited);
  }

  return generatePath(end);
}

export default findPath;
