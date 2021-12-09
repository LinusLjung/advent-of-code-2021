import getAdjacentPoints from './getAdjacentPoints';
import { Point } from './types';

function hasPoint(list: Point[], point: Point) {
  return list.some(
    (basinPoint) => point[1] === basinPoint[1] && point[2] === basinPoint[2]
  );
}

function getBasinFromPoint(
  points: Point[][],
  rowIndex: number,
  pointIndex: number,
  basin: Point[] = []
): Point[] {
  const point = points[rowIndex][pointIndex];

  if (point[0] === 9 || hasPoint(basin, point)) {
    return basin;
  }

  basin.push(point);

  const adjacentPoints = getAdjacentPoints(points, rowIndex, pointIndex)
    .filter(([point]) => point !== 9)
    .filter((point) => !hasPoint(basin, point));

  if (!adjacentPoints.length) {
    return basin;
  }

  return adjacentPoints.reduce<Point[]>(
    (acc, [, rowIndex, pointIndex]) =>
      getBasinFromPoint(points, rowIndex, pointIndex, acc),
    basin
  );
}

export default getBasinFromPoint;
