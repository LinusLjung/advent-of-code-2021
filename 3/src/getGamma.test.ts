import getGamma, { getGammaBits } from './getGamma';

const cases: [number[][], number[]][] = [
  [
    [
      [0, 0, 1, 0, 0],
      [1, 1, 1, 1, 0],
      [1, 0, 1, 1, 0],
      [1, 0, 1, 1, 1],
      [1, 0, 1, 0, 1],
      [0, 1, 1, 1, 1],
      [0, 0, 1, 1, 1],
      [1, 1, 1, 0, 0],
      [1, 0, 0, 0, 0],
      [1, 1, 0, 0, 1],
      [0, 0, 0, 1, 0],
      [0, 1, 0, 1, 0],
    ],
    [1, 0, 1, 1, 0],
  ],
  [[[1, 2, 3, 4]], [1, 2, 3, 4]],
  [
    [
      [1, 3, 3, 4],
      [1, 5, 3, 3],
    ],
    [1, 3, 3, 3],
  ],
  [[[]], []],
];

describe('getGammaBits()', () => {
  it.each(cases)(
    'should return the gamma bits of the given measurements',
    (input, expected) => {
      expect(getGammaBits(input)).toEqual(expected);
    }
  );
});

describe('getGamma()', () => {
  it('should return the gamma rate from the given measurements', () => {
    const input = `00100
11110
10110
10111
10101
01111
00111
11100
10000
11001
00010
01010`;

    const expected = 22;

    expect(getGamma(input)).toBe(expected);
  });
});
