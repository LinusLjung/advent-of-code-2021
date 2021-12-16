import Cell from './Cell';

function findBestUnvisited(cells: Cell[]): Cell | null {
  if (!cells.length) {
    return null;
  }

  return cells.reduce((best, current) => {
    if (current.riskFromStart < best.riskFromStart) {
      return current;
    }

    return best;
  });
}

export default findBestUnvisited;
