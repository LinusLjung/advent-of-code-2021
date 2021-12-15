import Cell from './Cell';
import findPath from './findPath';

function getRiskLevel(cells: Cell[]) {
  const start = cells[0];
  const end = cells.at(-1)!;

  const path = findPath(start, end, cells);
  const endOfPath = path.at(-1)!;

  return endOfPath.riskFromStart;
}

export default getRiskLevel;
