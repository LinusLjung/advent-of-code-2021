import { Point } from './types';

function getAdjacentPoints(
  points: Point[][],
  rowIndex: number,
  pointIndex: number
): Point[] {
  return [
    points[rowIndex - 1]?.[pointIndex],
    points[rowIndex]?.[pointIndex - 1],
    points[rowIndex]?.[pointIndex + 1],
    points[rowIndex + 1]?.[pointIndex],
  ].filter((point) => point != null);
}

export default getAdjacentPoints;
