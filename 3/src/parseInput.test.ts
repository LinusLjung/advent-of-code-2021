import parseInput from './parseInput';

describe('parseInput()', () => {
  it('should return a 2-dimensional array of bits', () => {
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

    const expected = [
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

    expect(parseInput(input)).toEqual(expected);
  });
});
