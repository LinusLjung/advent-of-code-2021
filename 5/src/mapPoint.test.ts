import mapPoint, { drawLine, matchArrayLength } from './mapPoint';
import { Line, Point } from './types';

describe('mapPoint()', () => {
  it.each([
    [
      [
        { x: 0, y: 9 },
        { x: 5, y: 9 },
      ],
      [
        { x: 0, y: 9 },
        { x: 1, y: 9 },
        { x: 2, y: 9 },
        { x: 3, y: 9 },
        { x: 4, y: 9 },
        { x: 5, y: 9 },
      ],
    ],
    [
      [
        { x: 9, y: 4 },
        { x: 3, y: 4 },
      ],
      [
        { x: 9, y: 4 },
        { x: 8, y: 4 },
        { x: 7, y: 4 },
        { x: 6, y: 4 },
        { x: 5, y: 4 },
        { x: 4, y: 4 },
        { x: 3, y: 4 },
      ],
    ],
    [
      [
        { x: 2, y: 2 },
        { x: 2, y: 1 },
      ],
      [
        { x: 2, y: 2 },
        { x: 2, y: 1 },
      ],
    ],
    [
      [
        { x: 7, y: 0 },
        { x: 7, y: 4 },
      ],
      [
        { x: 7, y: 0 },
        { x: 7, y: 1 },
        { x: 7, y: 2 },
        { x: 7, y: 3 },
        { x: 7, y: 4 },
      ],
    ],
  ])(
    'should return all points in a line',
    (input: Point[], expected: Point[]) => {
      const point = mapPoint(input as Line);
      expect(point).toEqual(expect.arrayContaining(expected));
      expect(point.length).toBe(expected.length);
    }
  );

  it.each([
    [
      [
        { x: 8, y: 0 },
        { x: 0, y: 8 },
      ],
      [
        { x: 8, y: 0 },
        { x: 7, y: 1 },
        { x: 6, y: 2 },
        { x: 5, y: 3 },
        { x: 4, y: 4 },
        { x: 3, y: 5 },
        { x: 2, y: 6 },
        { x: 1, y: 7 },
        { x: 0, y: 8 },
      ],
    ],
    [
      [
        { x: 6, y: 4 },
        { x: 2, y: 0 },
      ],
      [
        { x: 6, y: 4 },
        { x: 5, y: 3 },
        { x: 4, y: 2 },
        { x: 3, y: 1 },
        { x: 2, y: 0 },
      ],
    ],
    [
      [
        { x: 0, y: 0 },
        { x: 8, y: 8 },
      ],
      [
        { x: 0, y: 0 },
        { x: 1, y: 1 },
        { x: 2, y: 2 },
        { x: 3, y: 3 },
        { x: 4, y: 4 },
        { x: 5, y: 5 },
        { x: 6, y: 6 },
        { x: 7, y: 7 },
        { x: 8, y: 8 },
      ],
    ],
  ])('should handle diagonal lines', (input: Point[], expected: Point[]) => {
    expect(mapPoint(input as Line)).toEqual(expect.arrayContaining(expected));
  });
});

describe('matchAraryLength()', () => {
  it.each([
    [
      [1, 2, 3],
      [3, 2, 1],
      [
        [1, 2, 3],
        [3, 2, 1],
      ],
    ],
    [
      [1, 2, 3],
      [4],
      [
        [1, 2, 3],
        [4, 4, 4],
      ],
    ],
    [
      [1],
      [4, 2],
      [
        [1, 1],
        [4, 2],
      ],
    ],
    [[4], [4], [[4], [4]]],
  ])(
    "should extend an array's length if needed to match the other array's length",
    (arr1, arr2, expected) => {
      expect(matchArrayLength(arr1, arr2)).toEqual(expected);
    }
  );
});

describe('drawLine', () => {
  it.each([
    [0, 4, [0, 1, 2, 3, 4]],
    [4, 0, [4, 3, 2, 1, 0]],
    [0, 0, [0]],
    [0, 1, [0, 1]],
    [1, 0, [1, 0]],
  ])(
    'should return an array containing all numbers from start to end',
    (start, end, expected) => {
      expect(drawLine(start, end)).toEqual(expected);
    }
  );
});
