import Cell from './Cell';

function generatePath(endCell: Cell) {
  const path: Cell[] = [endCell];

  let current: Cell | null = endCell;

  while ((current = current.previous)) {
    path.push(current);
  }

  return path.reverse();
}

export default generatePath;
