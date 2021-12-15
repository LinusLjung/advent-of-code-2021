import Cell from './Cell';

function findBestUnvisited(cells: Cell[]): Cell | null {
  const unvisited = cells.filter((cell) => !cell.visited);

  if (!unvisited.length) {
    return null;
  }

  return unvisited.reduce((best, current) => {
    if (current.riskFromStart < best.riskFromStart) {
      return current;
    }

    return best;
  });
}

export default findBestUnvisited;
