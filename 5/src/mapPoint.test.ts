import mapPoint from './mapPoint';
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
    ],
    [
      [
        { x: 6, y: 4 },
        { x: 2, y: 0 },
      ],
    ],
    [
      [
        { x: 0, y: 0 },
        { x: 8, y: 8 },
      ],
    ],
  ])('should ignore diagonal lines', (input: Point[]) => {
    expect(mapPoint(input as Line)).toEqual([]);
  });
});
