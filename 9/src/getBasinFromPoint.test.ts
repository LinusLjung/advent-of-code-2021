import convertNumbersToPoints from './convertNumbersToPoints';
import getBasinFromPoint from './getBasinFromPoint';
import stringToNumberArray from './stringToNumberArray';

const input = convertNumbersToPoints(
  `2199943210
3987894921
9856789892
8767896789
9899965678`
    .split('\n')
    .map(stringToNumberArray)
);

describe('getBasinFromPoint()', () => {
  it.each([
    [0, 0, [2, 1, 3]],
    [0, 1, [2, 1, 3]],
    [1, 0, [2, 1, 3]],
    [0, 3, []],
    [4, 9, [8, 6, 7, 8, 6, 5, 6, 7, 8]],
  ])('should return the basin of the given point', (row, point, expected) => {
    const output = getBasinFromPoint(input, row, point).map(([point]) => point);

    expect(output).toEqual(expect.arrayContaining(expected));
    expect(output.length).toBe(expected.length);
  });
});
