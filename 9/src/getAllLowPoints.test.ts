import convertNumbersToPoints from './convertNumbersToPoints';
import getAllLowPoints from './getAllLowPoints';
import stringToNumberArray from './stringToNumberArray';

describe('getAllLowPoints()', () => {
  it('should get all low points', () => {
    const input = convertNumbersToPoints(
      `2199943210
3987894921
9856789892
8767896789
9899965678
8889966678`
        .split('\n')
        .map(stringToNumberArray)
    );

    expect(getAllLowPoints(input)).toEqual([
      [1, 0, 1],
      [0, 0, 9],
      [5, 2, 2],
      [5, 4, 6],
    ]);
  });
});
