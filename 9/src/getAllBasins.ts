import getAllLowPoints from './getAllLowPoints';
import getBasinFromPoint from './getBasinFromPoint';
import { Point } from './types';

function getAllBasins(points: Point[][]): Point[][] {
  return getAllLowPoints(points).map(([, rowIndex, pointIndex]) =>
    getBasinFromPoint(points, rowIndex, pointIndex)
  );
}

export default getAllBasins;
