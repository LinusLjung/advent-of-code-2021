import { BingoBoard, BingoCell } from './types';

function markBoard(board: BingoBoard, drawnNumber: number): BingoBoard {
  return board.map((row) =>
    row.map<BingoCell>(({ value, marked }) => ({
      value,
      marked: marked || value === drawnNumber,
    }))
  );
}

export default markBoard;
