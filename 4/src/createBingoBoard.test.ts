import createBingoBoard from './createBingBoard';
import { BingoBoard } from './types';

describe('createBingoBoard', () => {
  it('should enrich a number grid with bingo board properties', () => {
    const input = [
      [22, 13],
      [8, 2],
      [21, 9],
    ];

    const expected: BingoBoard = [
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
    ];

    expect(createBingoBoard(input)).toEqual(expected);
  });
});
