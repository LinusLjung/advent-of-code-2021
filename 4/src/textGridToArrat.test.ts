import textGridToArray from './textGridToArray';

describe('textGridToArray()', () => {
  it('should return a list of rows based on text grid', () => {
    const input = `22 13 17 11  0
 8  2 23  4 24
21  9 14 16  7
 6 10  3 18  5
 1 12 20 15 19`;

    const expected = [
      [22, 13, 17, 11, 0],
      [8, 2, 23, 4, 24],
      [21, 9, 14, 16, 7],
      [6, 10, 3, 18, 5],
      [1, 12, 20, 15, 19],
    ];

    expect(textGridToArray(input)).toEqual(expected);
  });
});
