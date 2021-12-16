import expandGrid from './expandGrid';

describe('expandGrid()', () => {
  it.each([
    [
      [[3]],
      2,
      [
        [3, 4],
        [4, 5],
      ],
    ],
    [
      [
        [3, 4],
        [5, 6],
      ],
      2,
      [
        [3, 4, 4, 5],
        [5, 6, 6, 7],
        [4, 5, 5, 6],
        [6, 7, 7, 8],
      ],
    ],
    [
      [
        [3, 4],
        [5, 6],
      ],
      4,
      [
        [3, 4, 4, 5, 5, 6, 6, 7],
        [5, 6, 6, 7, 7, 8, 8, 9],
        [4, 5, 5, 6, 6, 7, 7, 8],
        [6, 7, 7, 8, 8, 9, 9, 1],
        [5, 6, 6, 7, 7, 8, 8, 9],
        [7, 8, 8, 9, 9, 1, 1, 2],
        [6, 7, 7, 8, 8, 9, 9, 1],
        [8, 9, 9, 1, 1, 2, 2, 3],
      ],
    ],
  ])(
    'should expand the grid n times in both directions',
    (input, times, expected) => {
      expect(expandGrid(input, times)).toEqual(expected);
    }
  );
});
