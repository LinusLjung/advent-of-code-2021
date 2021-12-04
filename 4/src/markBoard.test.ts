import markBoard from './markBoard';
import { BingoBoard } from './types';

describe('markBoard()', () => {
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
      22,
      [
        [
          { value: 22, marked: true },
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
    ],
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
      1,
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
          { value: 21, marked: false },
          { value: 9, marked: false },
        ],
      ],
      13,
      [
        [
          { value: 22, marked: true },
          { value: 13, marked: true },
        ],
        [
          { value: 8, marked: false },
          { value: 2, marked: true },
        ],
        [
          { value: 21, marked: false },
          { value: 9, marked: false },
        ],
      ],
    ],
  ])(
    'should mark the cell of the given number',
    (
      inputBoard: BingoBoard,
      drawnNumber: number,
      expectedBoard: BingoBoard
    ) => {
      expect(markBoard(inputBoard, drawnNumber)).toEqual(expectedBoard);
    }
  );
});
