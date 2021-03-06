import calculateScore from './calculateScore';
import { BingoBoard } from './types';

describe('calculateScore()', () => {
  it.each([
    [
      [
        [
          { value: 22, marked: true },
          { value: 13, marked: false },
        ],
        [
          { value: 8, marked: false },
          { value: 2, marked: true },
        ],
        [
          { value: 21, marked: true },
          { value: 9, marked: false },
        ],
      ],
      0,
    ],
    [
      [
        [
          { value: 14, marked: true },
          { value: 21, marked: true },
          { value: 17, marked: true },
          { value: 24, marked: true },
          { value: 4, marked: true },
        ],
        [
          { value: 10, marked: false },
          { value: 16, marked: false },
          { value: 15, marked: false },
          { value: 9, marked: true },
          { value: 19, marked: false },
        ],
        [
          { value: 18, marked: false },
          { value: 8, marked: false },
          { value: 23, marked: true },
          { value: 26, marked: false },
          { value: 20, marked: false },
        ],
        [
          { value: 22, marked: false },
          { value: 11, marked: true },
          { value: 13, marked: false },
          { value: 6, marked: false },
          { value: 5, marked: true },
        ],
        [
          { value: 2, marked: true },
          { value: 0, marked: true },
          { value: 12, marked: false },
          { value: 3, marked: false },
          { value: 7, marked: true },
        ],
      ],
      188,
    ],
  ])(
    'should mark the cell of the given number',
    (board: BingoBoard, score: number) => {
      expect(calculateScore(board)).toEqual(score);
    }
  );
});
