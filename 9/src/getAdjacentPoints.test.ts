import convertNumbersToPoints from './convertNumbersToPoints';
import getAdjacentPoints from './getAdjacentPoints';
import stringToNumberArray from './stringToNumberArray';

describe('getAdjacentPoints()', () => {
  it('should return an array of all adjacent points to a given point', () => {
    const points = convertNumbersToPoints(
      [
        '2199943210',
        '3987894921',
        '9856789892',
        '8767796789',
        '9899915678',
        '8889966679',
      ].map(stringToNumberArray)
    );

    expect(getAdjacentPoints(points, 0, 0)).toEqual([
      [1, 0, 1],
      [3, 1, 0],
    ]);
    expect(getAdjacentPoints(points, 5, 9)).toEqual([
      [8, 4, 9],
      [7, 5, 8],
    ]);
    expect(getAdjacentPoints(points, 3, 5)).toEqual([
      [8, 2, 5],
      [7, 3, 4],
      [6, 3, 6],
      [1, 4, 5],
    ]);
  });
});
