import invertArrays from './invertArrays';

describe('invertArrays()', () => {
  it('should invert 2-dimensional arrays', () => {
    const input = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
    ];

    const expected = [
      [1, 5, 9],
      [2, 6, 10],
      [3, 7, 11],
      [4, 8, 12],
    ];

    expect(invertArrays(input)).toEqual(expected);
  });
});
