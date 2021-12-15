import createCells from './createCells';
import findPath from './findPath';

function getRiskLevel(input: string) {
  const cells = createCells(input);

  const start = cells[0];
  const end = cells.at(-1)!;

  const path = findPath(start, end, cells);
  const endOfPath = path.at(-1)!;

  return endOfPath.riskFromStart;
}

export default getRiskLevel;
