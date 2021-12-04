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
    const input = [
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
    ];

    const expected = 22;

    expect(getGamma(input)).toBe(expected);
  });
});
