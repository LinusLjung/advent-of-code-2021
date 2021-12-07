import calculateMostEfficientMoves from './calculateMostEfficientMoves';

describe('calculateMostEfficientMoves()', () => {
  it.each([
    [[16, 1, 2, 0, 4, 2, 7, 1, 2, 14], 168],
    [[16, 1, 0, 4, 2, 7, 1, 2, 14, 2], 168],
    [[2, 2, 2, 2], 0],
    [[2, 2, 2, 2, 3], 1],
    [[5, 2, 3, 2, 3], 5],
  ])('should calculate most efficient moves', (input, expected) => {
    expect(calculateMostEfficientMoves(input)).toBe(expected);
  });
});
