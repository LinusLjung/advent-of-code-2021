import { checkBoard } from './hasWinner';
import { BingoBoard } from './types';

describe('checkBoard()', () => {
  it.each([
    [
      [
        [
          { value: 22, marked: false },
          { value: 13, marked: false },
        ],
        [
          { value: 8, marked: false },
          { value: 2, marked: false },
        ],
        [
          { value: 21, marked: false },
          { value: 9, marked: false },
        ],
      ],
      false,
    ],
    [
      [
        [
          { value: 22, marked: true },
          { value: 13, marked: true },
        ],
        [
          { value: 8, marked: false },
          { value: 2, marked: false },
        ],
        [
          { value: 21, marked: false },
          { value: 9, marked: false },
        ],
      ],
      true,
    ],
    [
      [
        [
          { value: 22, marked: true },
          { value: 13, marked: false },
        ],
        [
          { value: 8, marked: true },
          { value: 2, marked: false },
        ],
        [
          { value: 21, marked: true },
          { value: 9, marked: false },
        ],
      ],
      true,
    ],
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
      false,
    ],
  ])('should check if a board has bingo', (input: BingoBoard, expected) => {
    expect(checkBoard(input)).toBe(expected);
  });
});
