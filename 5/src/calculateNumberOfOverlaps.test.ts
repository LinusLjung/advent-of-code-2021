import calculateNumberOfOverlaps from './calculateNumberOfOverlaps';

describe('calculateNumberOfOverlaps()', () => {
  it('should calculate number of overlaps based on input data', () => {
    const input = `0,9 -> 5,9
8,0 -> 0,8
9,4 -> 3,4
2,2 -> 2,1
7,0 -> 7,4
6,4 -> 2,0
0,9 -> 2,9
3,4 -> 1,4
0,0 -> 8,8
5,5 -> 8,2`;

    expect(calculateNumberOfOverlaps(input)).toBe(12);
  });
});
