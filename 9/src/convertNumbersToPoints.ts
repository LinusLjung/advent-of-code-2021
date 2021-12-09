import { Point } from './types';

function convertNumbersToPoints(rows: number[][]): Point[][] {
  return rows.map<Point[]>((row, rowIndex) =>
    row.map<Point>((point, pointIndex) => [point, rowIndex, pointIndex])
  );
}

export default convertNumbersToPoints;
