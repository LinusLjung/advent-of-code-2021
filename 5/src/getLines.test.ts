import getLines from './getLines';

describe('getLines', () => {
  it('should return the lines from the given input', () => {
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
    const expected = [
      [
        { x: 0, y: 9 },
        { x: 5, y: 9 },
      ],
      [
        { x: 8, y: 0 },
        { x: 0, y: 8 },
      ],
      [
        { x: 9, y: 4 },
        { x: 3, y: 4 },
      ],
      [
        { x: 2, y: 2 },
        { x: 2, y: 1 },
      ],
      [
        { x: 7, y: 0 },
        { x: 7, y: 4 },
      ],
      [
        { x: 6, y: 4 },
        { x: 2, y: 0 },
      ],
      [
        { x: 0, y: 9 },
        { x: 2, y: 9 },
      ],
      [
        { x: 3, y: 4 },
        { x: 1, y: 4 },
      ],
      [
        { x: 0, y: 0 },
        { x: 8, y: 8 },
      ],
      [
        { x: 5, y: 5 },
        { x: 8, y: 2 },
      ],
    ];

    expect(getLines(input)).toEqual(expected);
  });
});
