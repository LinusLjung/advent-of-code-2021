import { Point } from './types';

function getAllLowPoints(points: Point[][]): Point[] {
  return points.reduce<Point[]>((acc, row, rowIndex, rows) => {
    return [
      ...acc,
      ...row.reduce<Point[]>((acc, point, pointIndex) => {
        const adjacentPoints = [
          rows[rowIndex - 1]?.[pointIndex],
          rows[rowIndex][pointIndex - 1],
          rows[rowIndex][pointIndex + 1],
          rows[rowIndex + 1]?.[pointIndex],
        ].filter((point) => point != null);

        const isSmallest = !adjacentPoints.some(
          (adjacentPoint) => adjacentPoint[0] <= point[0]
        );

        if (isSmallest) {
          return [...acc, point];
        }

        return acc;
      }, []),
    ];
  }, []);
}

export default getAllLowPoints;
